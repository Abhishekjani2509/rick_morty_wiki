import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setpageNumber }) => {
  // console.log(info.pages)
  return <ReactPaginate
  className="pagination justify-content-center gap-4 my-4"
  forcePage={pageNumber === 1? 0 : pageNumber-1}
  nextLabel="Next"
  previousLabel="Prev"
  nextClassName="btn border-2"
  previousClassName="btn border-2"
  pageClassName="page-item"
  pageLinkClassName="page-link"
  activeClassName="active"
  onPageChange={(data)=>{
    setpageNumber(data.selected + 1)
  }}
  pageCount={info?.pages} />;
};
export default Pagination;
