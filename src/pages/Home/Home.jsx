import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Pagination from "../../components/Pagination/Pagination";
import "./home.scss";

const Home = (props) => {
    return (
      <div className="home-page">
        <Header
          goToHomePage = {props.goToHomePage}
          goToSinglePage = {props.goToSinglePage}
        ></Header>
        <Pagination
          page = {props.page}
          previousPage={props.previousPage}
          nextPage={props.nextPage}
          setPage = {props.setPage}
        ></Pagination>
        <main className="character-container">
          {props.characters.map((e) => (
            
            <Card
              character={e}
              liked={props.likedCharacters.includes(e.id)}
              addLikedCharacter={props.addLikedCharacter}
              removeLikedCharacter={props.removeLikedCharacter}
              ></Card>
            
          ))}
        </main>
        <Footer></Footer>
      </div>
    );
  }


export default Home;
