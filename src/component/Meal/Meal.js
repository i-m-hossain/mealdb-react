import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Meal = (props) => {
    const { strMeal, strMealThumb, strInstructions} = props.meal
    const cart = <FontAwesomeIcon icon={faCartPlus}/>
    return (
        
           
        <div className="card-group pb-4">
            <div className="card">
                <img src={strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p className="card-text">{strInstructions.slice(0, 150)}...</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">
                        <button className="btn btn-warning" onClick={() => { props.handleAddToCart(props.meal) }}>{cart} Add to cart</button>
                    </small>
                </div>
            </div>
        </div>
           
        
    );
};

export default Meal;