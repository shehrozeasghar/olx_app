import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
 import {ButtonContainer} from './Button'
// 1.51.39
export default class Details extends Component 
{
    render() 
    {
        return (
            <ProductConsumer>
                {
                    (value) => 
                    {
                        const { id, title, img, price, address, info } = value.detailProduct;
                        return(
                            <div className="container py-5" >
                                <div className="row" >
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5" >
                                        <h1> {title} </h1>
                                    </div>
                                </div>
                                {/* Product info */}
                                <div className="row" >
                                    <div className="col-10 mx-10 col-md-6 my-3" >
                                        <img src={img} className="img-fluid" alt="product" />
                                    </div>
                                    {/* Product text */}
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize" >
                                        <h2>{title}</h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2" >
                                            Address: <span className="text-uppercase" >{address}</span>
                                        </h4>
                                        <h4 className="text-blue" >
                                            <strong>
                                                Price: <span>Rs </span>{price}
                                            </strong>

                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0" >
                                            Description
                                        </p>
                                        <p className="text-muted lead" >{info}</p>
                                        <div>
                                            <Link to= "/">
                                                <ButtonContainer>Back</ButtonContainer>
                                            </Link>
                                            {/* 3.6.9 */}
                                            <ButtonContainer
                                            // <Cart />
                                            onclick={ () => {value.addToCart(id);
                                            value.openModal(id);
                                            } }  >Contact Number</ButtonContainer>
                                            {/* 3.10.45 */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            </ProductConsumer>


        )
    }
}
