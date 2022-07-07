import React from 'react';
import { useEffect, useState } from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';

function App() {
// see if they created a state array container?
const [shoppingList, setShoppingList] = useState([]);

const getShoppingList = () => {
    axios({
        method: 'GET',
        url: '/list'
    })
        .then((response) => {
            console.log('the client response is:', response);
            console.log('here is the data from response:', response.data);
            setShoppingList(response.data);
        })
        .catch(function (error) {
            console.log('ERROR ON GET', error);
        });
}


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


useEffect(() => {
    console.log('get here');
} , [] )


    itemSubmit();
    
    return (
        <div className="App">
            <Header 

            />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}



export default App;
