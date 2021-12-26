import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/mealImg.jpeg";
import CartButton from "./CartButton";

function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onClick={props.onCartOpen} />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
}

export default Header;
