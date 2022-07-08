// import { addListener } from "nodemon";

function ShoppingList({shoppingList}) {

    console.log('test')
    return (
        <>
        <ul>
            <li>
                {shoppingList.map(item => 
                    (<li key={item.id}> {item.name} {item.quantity} {item.unit} </li>)
                    )}
            </li>
            
        </ul>

        </>
    );

}

export default ShoppingList;