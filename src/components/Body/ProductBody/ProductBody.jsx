import React from 'react'; 
import {ProductSection} from './body'; 
import Products from './Products/Products'
import background from '../../../assets/images/abc.png'

function ProductBody({iconState}) { 
    const category1 = { 
        title: 'Foods & Fruits', 
        data: [1, 2, 3, 4, 5, 6, 7, 8] 
    } 
    const category2 = { 
        title: 'Foods & Fruits', 
        data: [1, 2, 3] 
    } 
    const category3 = { 
        title: 'Foods & Fruits', 
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] 
    } 
    const category4 = { 
        title: 'Foods & Fruits', 
        data: [1, 2, 3, 4, 5] 
    } 

    return ( 
        <ProductSection iconState={iconState}> 
            <img src={background} alt="Image" width= '100%' /> 
            <Products obj={category1} /> 
            <Products obj={category2} /> 
            <Products obj={category3} /> 
            <Products obj={category4} /> 
        </ProductSection> 
    ) 
} 

export default ProductBody; 


