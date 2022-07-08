// import { addListener } from "nodemon";

import { useState } from "react";

function ShoppingList({shoppingList, purchaseItem}) {

    const [newPurchase, setNewPurchase] = useState(false)

    console.log('test')
    return (
        <>
            <ul>
                    {shoppingList.map(item => 
                        <div key={item.id}>
                            <li > {item.name} {item.quantity} {item.unit} </li>
                            <button onClick={(event) => setNewPurchase(!event.target.value)}>Purchased</button>
                            <button>Delete</button>
                        </div>
                    )}
            </ul>
        </>
    );

}

export default ShoppingList;