import React from 'react';
import { useEffect, useState } from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
// import { response } from 'express';

function App() {

// see if they created a state array container?
const getShoppingList = () => {
    const [shoppingList, setShoppingList] = useState([]);

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

useEffect(() => {
    console.log('get here');
} , [] )



    
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
