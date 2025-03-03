import { useState } from "react";
import Nav from "./Navigation/Nav";
import Product from "./Products/Product";
import Recommended from "./Recommendeds/Recommended";
import Sidebar from "./Sidebar/Sidebar";
//Database
import data from './db/data'
import Card from "./Components/Card";
import Category from "./Sidebar/Category/Category";
import Colors from "./Sidebar/Colors/Colors";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log(data);
  
  //input filter

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filterItems = (event) => {
    Product.title.toLocaleLowercase().indexOf(query.toLocaleLowerCase()) !== -1;
  };
  // Radio filter

  const handlechange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //butoon filter

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    if (query) {
      filteredProduct = filterItems();
    }
    //selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ Category, Colors, company, newPrice, tilte }) =>
          Category === selected ||
          Colors === selected ||
          company === selected ||
          newPrice === selected ||
          tilte === selected
      );
      return (filteredProduct = products);
    }

    return products.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(data, selectedCategory, query);
  return (
    <div>
      <Sidebar handlechange={handlechange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Product result={result} />
    </div>
  );
}

export default App;
