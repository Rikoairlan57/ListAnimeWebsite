import { Error, Card, PageLoad } from "../components";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";

const Page = ({ data, isFetching, setPage, page }) => {
  const [searchParams] = useSearchParams({ q: " " });
  const query = searchParams.get("q");
  const hasNextPage = data?.pagination?.has_next_page;
  const totalPage = data?.pagination?.last_visible_page;
  const pageArr = [];
  const dataList = data?.data;

  if (page < 4) {
    if (totalPage < 7) {
      for (let i = 1; i <= totalPagel; i++) {
        pageArr.push(i);
      }
    } else {
      for (let i = 1; i < 8; i++) {
        pageArr.push(i);
      }
    }
  } else {
    if (page + 4 >= totalPage) {
      for (let i = totalPage - 8; i <= totalPage; i++) {
        pageArr.push(i);
      }
    } else {
      for (let i = page - 3; i < page + 4; i++) {
        pageArr.push(i);
      }
    }
  }

  return (
    <>
      <hr className="w-full my-2 md:my-4 opacity-60 text-white" />
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex flex-row flex-wrap justify-center">
          {isFetching ? (
            <PageLoad />
          ) : (
            dataList?.map((anime) => (
              <div
                key={anime.mal_id}
                className="min-w-[20%] max-w-[20%] md:max-w-[15%] md:min-w-[15%] mx-2 mb-[10px] md:mx-6 md:mb-6]"
              >
                <Card data={anime} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
