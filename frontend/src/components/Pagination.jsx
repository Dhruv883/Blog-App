import React from "react";
import { usePagination } from "../hooks/usePagination";

const Pagination = ({
  currentpage,
  siblingcount = 1,
  totalpagecount,
  onPageChange,
}) => {
  const paginationrange = usePagination({
    currentpage,
    siblingcount,
    totalpagecount,
  });

  if (currentpage === 0 || paginationrange.length < 2) {
    return null;
  }

  const next = () => {
    onPageChange(currentpage + 1);
  };

  const prev = () => {
    onPageChange(currentpage - 1);
  };

  let lastpage = paginationrange[paginationrange.length - 1];

  return (
    <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
      <div className="flex items-center">
        <button
          disabled={currentpage === 1}
          type="button"
          className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={prev}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
        {paginationrange.map((pageNumber) => {
          if (pageNumber === "...") {
            return (
              <button className="cursor-default w-full px-4 py-2 text-base bg-white border">
                &#8230;
              </button>
            );
          }

          return (
            <button
              type="button"
              className={`w-full px-4 py-2 text-base border ${
                pageNumber === currentpage
                  ? "text-white bg-blue-500"
                  : "text-gray-600 bg-white hover:bg-gray-100"
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          disabled={currentpage === lastpage}
          type="button"
          className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={next}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
