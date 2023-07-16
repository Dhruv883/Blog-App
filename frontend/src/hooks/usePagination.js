import { useMemo } from "react";

export const usePagination = ({
  totalcount,
  pagesize,
  siblingcount = 1,
  currentpage,
  totalpagecount,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingcount + 5;

    if (totalPageNumbers >= totalpagecount) {
      return range(1, totalpagecount);
    }

    const leftsib = Math.max(currentpage - siblingcount, 1);
    const rightsib = Math.min(currentpage + siblingcount, totalpagecount);

    const leftdots = leftsib > 2;
    const rightdots = rightsib < totalpagecount - 2;

    const firstpageindex = 1;
    const lastpageindex = totalpagecount;

    if (!leftdots && rightdots) {
      let leftcount = 3 + 2 * siblingcount;
      let leftrange = range(1, leftcount);

      return [...leftrange, "...", totalpagecount];
    }

    if (leftdots && !rightdots) {
      let rightcount = 3 + 2 * siblingcount;
      let rightrange = range(totalpagecount - rightcount + 1, totalpagecount);

      return [firstpageindex, "...", ...rightrange];
    }

    if (leftdots && rightdots) {
      let middleRange = range(leftsib, rightsib);
      return [firstpageindex, "...", middleRange, "...", lastpageindex];
    }
  }, [totalcount, pagesize, siblingcount, currentpage, totalpagecount]);

  return paginationRange;
};

function range(start, end) {
  const length = end - start + 1;

  return Array.from({ length }, (value, index) => {
    return index + start;
  });
}
