// import { faBoxTissue } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'

import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();


class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        modalOpen:true,
        modalProduct: detailProduct 
    };

    componentDidMount()
    {
        this.setProducts();
    }

    setProducts = () =>
    {
        let tempProducts = [];
        storeProducts.forEach (item => 
            {
                const singleItem = {...item};
                tempProducts = [...tempProducts,singleItem];
            });
            this.setState(()=>{return {products: tempProducts}});
    };

    getItem = id =>
    {
        const product = this.state.products.find(item =>item.id ===id);
        return product;
    };
    handleDetail = (id) =>
    {
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct: product};
        });
    };

    openModal = id =>{
        const product = this.getItem(id)
        this.setState(()=>
        {
            return {modalProduct:product, modalOpen:true}
        })
    }

    closeModal = () =>
    {
        this.setState(
        () =>{
            return {modalOpen: false}
        }
        )
    }

    render() {
        return (
            <ProductContext.Provider value={{...this.state,
                handleDetail :  this.handleDetail,
                openModal: this.openModal,
                closeModal: this.closeModal}}>
                {this.props.children}
            </ProductContext.Provider>

            // <ProductContext.Provider value="hello from context">
            //     {this.props.children}
            //     {/* 1.42.13 */}
            // </ProductContext.Provider>
        );

    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};