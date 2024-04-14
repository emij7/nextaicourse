import React from "react";
import Link from "next/link";
//en esta página se mantiene el loading y error del layout
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  try {
    const res = await fetch(`${url}${id}`);
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch drink data");
  }
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.drinkId);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;
