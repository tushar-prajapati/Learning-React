import React, { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
import products from './db/data.jsx'
import Category from './Sidebar/Category/Category'
import Card from './components/Card'
import './index.css'
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");


// Input Filter
const handleInputChange= event =>{
  setQuery(event.target.value);
}

const filteredItems = products.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);  


// Radio Filter
const handleChange = event =>{
  setSelectedCategory(event.target.value);
}

// Recommended buttons filter
const handleClick = event =>{
  setSelectedCategory(event.target.value)
}

function filteredData(products, selected, query){
    let filteredProducts = products

    if(query){
      filteredProducts = filteredItems;
    }

    if(selected) {
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title})=> category === selected || color===selected || company=== selected || newPrice === selected || title ===selected)
    }

    return filteredProducts.map(({img, reviews, star, title, prevPrice, newPrice})=>(
      <Card 
      key={Math.random()}
      img={img}
      title={title}
      reviews={reviews}
      star={star}
      prevPrice={prevPrice}
      newPrice={newPrice}

      />
    ))

}

const result = filteredData(products, selectedCategory, query);

  return (
    <>
    <Sidebar handleChange={handleChange} />
    <Nav query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Products result={result}/>
    
    </>
  )
}

export default App