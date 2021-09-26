import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.count);
    return (
        <div className="col-md-4">
            <h2 className="bg-warning rounded">Cart</h2>
            <p>Cart Item: {props.count}</p>
            {
                props.cart.map(product =>{
                    return(
                        <div class="row row-cols-3 border mb-3">
                            <p className="col mt-4"> {product.strMeal}</p>
                            <p className="col mt-4"> {product.strCategory}</p>
                            <div className="col p-1">
                                <img src={product.strMealThumb} alt="" width="80" />
                            </div>

                        </div>
                    )
                    
                })
            }
        </div>
    );
};

export default Cart;