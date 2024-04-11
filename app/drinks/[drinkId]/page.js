import React from "react";

const SingleDrinkPage = ({ params }) => {
  console.log(params);
  return <div>Param id: {params.drinkId}</div>;
};

export default SingleDrinkPage;
