import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setpageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <>
      <style jsx>
        {`
        @media (max-width: 768px){
          .next, .prev{
            display : none
          }
          .pagination{
            font-size: 12px;
          }
        }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="btn border-2 next"
        previousClassName="btn border-2 prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 576?1:2}
        PageRangeDisplayed={width < 576?1:2}
        activeClassName="active"
        onPageChange={(data) => {
          setpageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
      ;
    </>
  );
};
export default Pagination;
