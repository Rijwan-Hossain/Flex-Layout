import React from 'react';
import { MainBody } from './body'
import Selection from './Selection/Selection'
import ProductBody from './ProductBody/ProductBody'

function Body({iconState}) { 
    
    return ( 
        <MainBody> 
            <Selection iconState={iconState} /> 
            <ProductBody iconState={iconState} /> 
        </MainBody> 
    ) 
} 

export default Body;