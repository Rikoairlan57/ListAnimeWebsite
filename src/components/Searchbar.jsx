import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";

const Searchbar = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  return (
    <form className="flex flex-row absolute top-6 right-0 md:relative 2xl:mt-4 md:ml-3 text-white mr-3 bg-grey rounded-sm w-[175px] md:w-[20%] h-6 md:h-[7vh]">
      <input
        type="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
        autoComplete="off"
        className=" placeholder:text-white placeholder:text-sm placeholder:font-light
            bg-transparent flex-1 w-1 h-full pl-2 "
      />
      <Link to={`/anime/search?q=${inputValue}`}>
        <button
          className="md:mr-3 w-6 md:w-[7%] md:text-xl h-full align-sub"
          onClick={() => setInputValue("")}
        >
          <AiOutlineSearch />
        </button>
      </Link>
    </form>
  );
};

export default Searchbar;
