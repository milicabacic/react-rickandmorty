import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";


const Card = (props) => {
    return (
      <Link to={`/characters/${props.character.id}`} className="card">
        <img
          className="character-image"
          src={props.character.image}
          alt="character"
        ></img>
        <h2 className="character-name">{props.character.name}</h2>

        {!props.liked ? (
          <button
            className="button-like"
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
            props.addLikedCharacter(props.character.id)}}
          >
            <i className="fa">&#xf087;</i>
            <span>Like</span>
          </button>
        ) : (
          <button
            className="button-unlike"
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              props.removeLikedCharacter(props.character.id)}}
          >
            <i className="fa">&#xf087;</i>
            <span>Unlike</span>
          </button>
        )}
      </Link>
    );
  }


export default Card;
