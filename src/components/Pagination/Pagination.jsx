import React from "react";

class Pagination extends React.Component {
 
    

    render() {
        let pageArray = [];
        if(this.props.page === 1 || this.props.page === 2 || this.props.page === 3) {
            pageArray = [1,2,3,4,5]
        } else if (this.props.page ===40 || this.props.page === 41 || this.props.page ===42) {
            pageArray = [38,39,40,41,42]
        } else {
            pageArray = [this.props.page-2, this.props.page-1, this.props.page, this.props.page+1, this.props.page+2]
        }
        return <div>
            <button onClick = {this.props.previousPage}>Previous</button>
            {pageArray.map(e=> {return <button onClick = {() => {this.props.setPage(e)}}>{e}</button>})}
            <button onClick = {this.props.nextPage}>Next</button>
            
        </div>
    }
}

export default Pagination;