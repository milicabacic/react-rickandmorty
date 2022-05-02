import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./singlepage.scss";
import back from "../../images/left-arrow.png"
import { useNavigate, useParams } from "react-router-dom";

const SinglePage = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const createCharData = (char) => {
    return (
      <div>
        <h3>Gender: {char.gender}</h3>
        <h3>Status: {char.status}</h3>
        <h3>Species: {char.species}</h3>
        <h3>Location: {char.location.name}</h3>
        <h3>Appears in: {char.episode.length} episodes</h3>
      </div>
    );
  };

  const char = props.characters.find((e) => e.id == id);

  return (
    <div className="single-page">
      <Header
        goToHomePage={props.goToHomePage}
        goToSinglePage={props.goToSinglePage}
      ></Header>
      <main>
        <button onClick = {() => navigate("/")}  className="back-button" >
          <img src={back} alt="home"/>
        </button>
        <div className="single-character">
          <div className="char-card">
            {char ? (
              <Card
                character={char}
                liked={props.likedCharacters.includes(Number(id))}
                addLikedCharacter={props.addLikedCharacter}
                removeLikedCharacter={props.removeLikedCharacter}
              ></Card>
            ) : <div className="nonExistingChar"><h2>Character doesn't exist</h2></div>}
          </div>
          <div className="char-data">{char ? createCharData(char) : null}</div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default SinglePage;
