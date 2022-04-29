import React from "react";
import "./pagination.css"

class Pagination extends React.Component {
  render() {
    let pageArray = [];
    if (
      this.props.page === 1 ||
      this.props.page === 2 ||
      this.props.page === 3
    ) {
      pageArray = [1, 2, 3, 4, 5];
    } else if (
      this.props.page === 40 ||
      this.props.page === 41 ||
      this.props.page === 42
    ) {
      pageArray = [38, 39, 40, 41, 42];
    } else {
      pageArray = [
        this.props.page - 2,
        this.props.page - 1,
        this.props.page,
        this.props.page + 1,
        this.props.page + 2,
      ];
    }
    return (
      <div className="pagination">
        <button className="previousPage" onClick={this.props.previousPage}>&lt;</button>
        {pageArray.map((e) => {
          return (
            <button
              className={this.props.page === e ? "activePage" : "inactivePage"}
              onClick={() => {
                this.props.setPage(e);
              }}
            >
              {e}
            </button>
          );
        })}
        <button className="nextPage" onClick={this.props.nextPage}>&gt;</button>
      </div>
    );
  }
}

export default Pagination;
