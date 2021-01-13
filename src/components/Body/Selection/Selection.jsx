import React from 'react';
import {SelectionArea} from './bodySelection'
import Links from './Links/Links'

function Selection({iconState}) { 
    const gender = { 
        title: 'Gender', 
        data: ['Male', 'Female', 'Others'] 
    } 

    const brands = {
        title: 'Brand', 
        data: ['Hatil', 'Prolific', 'Analytics', 'A', 'B', 'C', 'D', 'E', 'F']
    } 

    return ( 
        <SelectionArea iconState={iconState}> 
            <Links obj={gender} /> 
            <Links obj={brands} /> 
        </SelectionArea> 
    ) 
} 

export default Selection;