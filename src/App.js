import React from "react";
import Home from "./pages/Home/Home";
import SinglePage from "./pages/SinglePage/SinglePage";
import "./app.css";

class App extends React.Component {
  state = {
    page: 1,
    characters: [],
    likedCharacters: JSON.parse(localStorage.getItem("likedCharacters")) || [],
  };

  fetchData() {
    fetch("https://rickandmortyapi.com/api/character/?page=" + this.state.page)
      .then((res) => res.json())
      .then((res) => this.setState({ characters: res.results }));
  }

  setPage(pageNumber) {
    this.setState({page: pageNumber})
  }

  nextPage() {
    if(this.state.page<42)
      this.setState({page: this.state.page+1})
  }

  previousPage() {
    if(this.state.page>1)
      this.setState({page: this.state.page-1})
  }

  addLikedCharacter(id) {
    this.setState(
      {
        likedCharacters: [
          ...this.state.likedCharacters.filter((e) => e != id),
          id,
        ],
      },
      () =>
        localStorage.setItem(
          "likedCharacters",
          JSON.stringify(this.state.likedCharacters)
        )
    );
  }

  removeLikedCharacter(id) {
    this.setState(
      {
        likedCharacters: this.state.likedCharacters.filter((e) => e != id),
      },
      () =>
        localStorage.setItem(
          "likedCharacters",
          JSON.stringify(this.state.likedCharacters)
        )
    );
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(previousProps, previousState) {
    if(previousState.page!==this.state.page) {
      this.fetchData()
    }
  }

  render() {
    return (
      <>
        {/* <Home
          characters={this.state.characters}
          likedCharacters={this.state.likedCharacters}
          addLikedCharacter={this.addLikedCharacter.bind(this)}
          removeLikedCharacter={this.removeLikedCharacter.bind(this)}
          previousPage = {this.previousPage.bind(this)}
          nextPage = {this.nextPage.bind(this)}
          page = {this.state.page}
          setPage = {this.setPage.bind(this)}
        ></Home> */}
        <SinglePage
          id = {3}
          characters={this.state.characters}
          likedCharacters={this.state.likedCharacters}
          addLikedCharacter={this.addLikedCharacter.bind(this)}
          removeLikedCharacter={this.removeLikedCharacter.bind(this)}
        ></SinglePage>
      </>
    );
  }
}

export default App;
