import React from "react";
import CardItem from "../Components/CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1> Check out this epic destination!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="explore the hidden waterfall deeep imside the amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the islands of bali"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set sail in Atlantic ocen"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience football on top of himalayan mountins"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the sahara desert on a guided camel"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
