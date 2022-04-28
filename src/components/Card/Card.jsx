import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img
          id="character-image"
          src={this.props.character.image}
          alt="character"
        ></img>
        <h2 id="character-name">{this.props.character.name}</h2>

        {!this.props.liked ? (
          <button
            className="button-like"
            onClick={() => this.props.addLikedCharacter(this.props.character.id)}
          >
            <i className="fa">&#xf087;</i>
            <span>Like</span>
          </button>
        ) : (
          <button
            className="button-unlike"
            onClick={() => this.props.removeLikedCharacter(this.props.character.id)}
          >
            <i className="fa">&#xf087;</i>
            <span>Unlike</span>
          </button>
        )}
      </div>
    );
  }
}

export default Card;
