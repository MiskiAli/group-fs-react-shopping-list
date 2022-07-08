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

useEffect(() => {
    console.log('get here');
    getShoppingList();
} , [] )


// see if they created a state array container?
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


const purchaseItem = () => {
    axios({
        method: 'PUT',
        url: '/list',
        data: {purchased: true}
    })
    .then(function() {
        getShoppingList();
    })
    .catch(function(error) {
        alert('error in PUT', error);
    })
}


    
    return (
        <div className="App">
            <Header 

            />
            <main>
                {/* needs prop!! */}
                <ShoppingForm />
                <ShoppingList
                shoppingList = {shoppingList}
                />
                <p>Under Construction...</p>
            </main>
        </div>
    );
}



export default App;
