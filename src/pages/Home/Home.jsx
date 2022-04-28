import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import "./home.css";

class Home extends React.Component {
  render() {
      this.props.characters.forEach(e => console.log(e));
    return (
      <div className="home-page">
        <Header></Header>
        <main className="character-container">
          {this.props.characters.map((e) => (
            <Card
              character={e}
              liked={this.props.likedCharacters.includes(e.id)}
              addLikedCharacter = {this.props.addLikedCharacter}
              removeLikedCharacter = {this.props.removeLikedCharacter}
            ></Card>
          ))}
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
