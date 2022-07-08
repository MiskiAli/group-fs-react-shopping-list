import {useState} from 'react';
import axios from 'axios';

function ShoppingForm() {

    const [newName, setNewName]= useState('');
    const [newQuantity, setNewQuantity]= useState('');
    const [newUnit, setNewUnit]= useState('');
// itemSubmit

// POST goes here
const itemSubmit = (event) => {
    // event.preventDefault();

    

    axios({
        method: 'POST',
        url: '/list',
        data: {
            name: newName,
            quantity: newQuantity,
            unit: newUnit,
        }
    }).then((response) => {
        console.log('This is what we get from POST', response.data);
        getShoppingList();
    }).catch((error) => {
        alert('Error in POST request:', error);
        console.log('Error in POST request:', error);
    })


}



    return (
        <>
        
        <h2>Add An Item</h2>
        {/* check in later to make sure post function name is correct */}
        <form onSubmit={itemSubmit}>
        <lable>Item: </lable>
        <input onChange= {(event) => setNewName(event.target.value)}
        value={newName}
        />
        <lable>Quantity: </lable>
        <input onChange={(event)=> setNewQuantity(event.target.value)}
        value={newQuantity}
        />
        <lable>Unit: </lable>
        <input onChange={(event)=> setNewUnit(event.target.value)}
        value={newUnit}
        />
        <button type="submit"> Save </button>
        </form>
        </>
    );

}

export default ShoppingForm;