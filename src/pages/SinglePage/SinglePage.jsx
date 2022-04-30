import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./singlepage.css"

class SinglePage extends React.Component {

  createCharData(char) {
    return <div>
      <h3>Gender: {char.gender}</h3>
      <h3>Status: {char.status}</h3>
      <h3>Species: {char.species}</h3>
      <h3>Location: {char.location.name}</h3>
      <h3>Appears in: {char.episode.length} episodes</h3>
    </div>
  }

  render() {

    const char = this.props.characters.find(e => e.id == this.props.id);

    return (
      <div className="single-page">
        <Header
        goToHomePage = {this.props.goToHomePage}
        goToSinglePage = {this.props.goToSinglePage}
        ></Header>
        <main className="single-character">
          <div className="char-card">
            {char?<Card
              character={char}
              liked={this.props.likedCharacters.includes(this.props.id)}
              addLikedCharacter={this.props.addLikedCharacter}
              removeLikedCharacter={this.props.removeLikedCharacter}
            ></Card> : null }
          </div>
          <div className="char-data">
              {char? this.createCharData(char) : null}
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default SinglePage;
