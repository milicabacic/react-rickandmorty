import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Pagination from "../../components/Pagination/Pagination";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Header></Header>
        <Pagination
          page = {this.props.page}
          previousPage={this.props.previousPage}
          nextPage={this.props.nextPage}
          setPage = {this.props.setPage}
        ></Pagination>
        <main className="character-container">
          {this.props.characters.map((e) => (
            <Card
              character={e}
              liked={this.props.likedCharacters.includes(e.id)}
              addLikedCharacter={this.props.addLikedCharacter}
              removeLikedCharacter={this.props.removeLikedCharacter}
            ></Card>
          ))}
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
