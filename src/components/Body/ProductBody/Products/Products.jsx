import React from 'react';
import ContentHeader from './ContentHeader/ContentHeader'
import MainContent from './MainContent/MainContent'

function Product({obj}) { 
    return ( 
        <> 
            <ContentHeader title={obj.title} /> 
            <MainContent data={obj.data} /> 
        </> 
    ) 
} 

export default Product;