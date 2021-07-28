import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src='.components/PICS/Autum trees.jpg'
              text="Explore the top visiting place in Indian Jungles"
              label="Jungles"
              path="/sign-up"
            />
            <CardItem
              src='src/components/PICS/sunflower.jpg'
              text="Beautiful Sunflower park with colorful flowers"
              label="Flowers"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src='src/components/PICS/amazing-animal.jpg'
              text="Top visiting place in big Zoo"
              label="Jungles"
              path="/services"
            />
            <CardItem
              src='src/components/PICS/bora bora.jpg'
              text="Exploring beautiful Maldives enjoying beaches"
              label="Beach"
              path="/products"
            />
            <CardItem
              src='src/components/PICS/Capri Travel Guide.png'
              text="Amazing travelling areas in beautiful south africa places"
              label="Walking"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
