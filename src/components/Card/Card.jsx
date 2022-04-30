import React from "react";
import "./card.css";
import { Link } from "react-router-dom";


class Card extends React.Component {
  render() {
    return (
      <Link to={`/characters/${this.props.character.id}`}className="card">
        <img
          id="character-image"
          src={this.props.character.image}
          alt="character"
        ></img>
        <h2 id="character-name">{this.props.character.name}</h2>

        {!this.props.liked ? (
          <button
            className="button-like"
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
            this.props.addLikedCharacter(this.props.character.id)}}
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
              this.props.removeLikedCharacter(this.props.character.id)}}
          >
            <i className="fa">&#xf087;</i>
            <span>Unlike</span>
          </button>
        )}
      </Link>
    );
  }
}

export default Card;
