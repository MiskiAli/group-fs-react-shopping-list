// import { addListener } from "nodemon";

function ShoppingList({shoppingList}) {

    console.log('test')
    return (
        <>
            <ul>
                    {shoppingList.map(item => 
                        <div key={item.id}>
                            <li > {item.name} {item.quantity} {item.unit} </li>
                            <button>Purchased</button>
                            <button>Delete</button>
                        </div>
                    )}
            </ul>
        </>
    );

}

export default ShoppingList;