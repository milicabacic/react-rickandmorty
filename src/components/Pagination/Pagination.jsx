import React from "react";
import "./pagination.scss";


const Pagination = (props) => {
    let pageArray = [];
    if (
      props.page === 1 ||
      props.page === 2 ||
      props.page === 3
    ) {
      pageArray = [1, 2, 3, 4, 5];
    } else if (
      props.page === 40 ||
      props.page === 41 ||
      props.page === 42
    ) {
      pageArray = [38, 39, 40, 41, 42];
    } else {
      pageArray = [
        props.page - 2,
        props.page - 1,
        props.page,
        props.page + 1,
        props.page + 2,
      ];
    }
    return (
      <div className="pagination">
        <button className="previousPage" onClick={props.previousPage}>&lt;</button>
        {pageArray.map((e) => {
          return (
            <button
              className={props.page === e ? "activePage" : "inactivePage"}
              onClick={() => {
                props.setPage(e);
              }}
            >
              {e}
            </button>
          );
        })}
        <button className="nextPage" onClick={props.nextPage}>&gt;</button>
      </div>
    );
  }


export default Pagination;
