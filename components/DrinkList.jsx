import React from "react";

const DrinkList = ({ drinks }) => {
  return (
    <ul className="menu menu-vertical pl-0">
      {drinks.map((drink) => {
        return (
          <li key={drink.idDrink} className="menu-item">
            <a href={`/drinks/${drink.idDrink}`} className="menu-link">
              {drink.strDrink}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default DrinkList;
