import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import Searchbar from '../Searchbar/Searchbar';
import './Main.css'
const Main = () => {
    const [cart, setCart] = useState([])
    const [searchText, setSearchtext] = useState('a')
    const [displayFood, setDisplayFood] =useState([])
    const [count,setCount] = useState(0)
     
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        if (searchText){
            fetch(url)
                .then(res => res.json())
                .then(data => setDisplayFood(data))
        }
    }, [searchText])
    const handleAddToCart =(meal) =>{
        const newCart = [...cart, meal]
        setCart(newCart)
        setCount(newCart.length)
        
    }
    const handleSearch =(event) =>{
        const searchText = event.target.value;
        setSearchtext(searchText);
        
    }
    return (
        
        <>
            <Searchbar handleSearch={handleSearch}></Searchbar>
            <div className="row mt-5">
                <div className="col-md-8 ps-5">
                    <div className="row row-cols-3">
                        {
                            displayFood.meals ? displayFood.meals.map(meal => <Meal meal={meal} key={meal.idMeal} handleAddToCart={handleAddToCart}></Meal>) : ''
                        }
                    </div>
                </div>
                
                <Cart cart ={cart} count={count}></Cart>
            </div>
        </>
        
        
    );
};

export default Main;