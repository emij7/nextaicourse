import DrinkList from "@/components/DrinkList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDriks = async () => {
  try {
    let data;
    const response = await fetch(url);
    data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const DrinksPage = async () => {
  const data = await fetchDriks();
  return (
    <div>
      <DrinkList drinks={data.drinks} />
    </div>
  );
};
export default DrinksPage;
