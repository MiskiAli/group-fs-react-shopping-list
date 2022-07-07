import React from 'react';
import { useEffect, useState } from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';

// see if they created a state array container?
const [shoppingList, setShoppingList] = useState([]);

const getShoppingList = () => {

}

useEffect(() => {
    console.log('get here');
} , [] )

function App() {

    
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
