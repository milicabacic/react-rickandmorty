import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./singlepage.css"

class SinglePage extends React.Component {
  render() {

    const char = this.props.characters.find(e => e.id == this.props.id)

    return (
      <div className="single-page">
        <Header></Header>
        <main className="single-character">
          <div className="card">
            {char?<Card
              character={char}
              liked={this.props.likedCharacters.includes(this.props.id)}
              addLikedCharacter={this.props.addLikedCharacter}
              removeLikedCharacter={this.props.removeLikedCharacter}
            ></Card> : null }
          </div>
          <div></div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default SinglePage;
