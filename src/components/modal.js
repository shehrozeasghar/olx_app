import React, { Component } from 'react'
import styled from 'styled-components';
import {ButtonContainer, ProductConsumer} from '../context'

export default class modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {const {modalOpen, closeModal} = value;
                const {img, title, price, contact} = value.modalProduct;
                if(!modalOpen)
                {
                    return null;
                }
                else
                {
                    return(
                    <ModalContainer>
                        {/* 3.51.31 */}
                        <div className="container">
                            <div className="row">
                                <div id="modal" 
                                className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                    <h5>Contact details</h5>
                                    <img src={img} className="img-fluid" alt="Product" />
                                    <h5>{title}</h5>
                                    <h5 className="text-muted" >Price: Rs {price} </h5>
                                    <h5 className="text-muted" >Cell #: {contact} </h5>
                                    {/* 4:00:16 */}
                                </div>

                            </div>

                        </div>
                    </ModalContainer>
                    )
                }
            }
        }
            </ProductConsumer>
        )
    }
}


const ModalContainer = styled.div
`
position: fixed;
top:0;
right: 0;
bottom:0;
left: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#modal
{
    background: var(--mainWhite);
}


`
