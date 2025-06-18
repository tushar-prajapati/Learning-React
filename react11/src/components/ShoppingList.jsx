import React from 'react'
import { useState } from 'react'

const ShoppingList = () => {
    const [id, setId] = useState(1);
    const [items, setItems] = useState([{id: id, name: "First Item", quantity: 20}]);
  return (
    <div>
        

    </div>
  )
}

export default ShoppingList