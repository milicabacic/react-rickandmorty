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
    fetch("https://rickandmortyapi.com/api/character/?page=" + this.state.page)
      .then((res) => res.json())
      .then((res) => this.setState({ characters: res.results }));
  }

  render() {
    return (
      <>
        {/* <Home
          characters={this.state.characters}
          likedCharacters={this.state.likedCharacters}
          addLikedCharacter={this.addLikedCharacter.bind(this)}
          removeLikedCharacter={this.removeLikedCharacter.bind(this)}
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
