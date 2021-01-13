import React from 'react';
import {P, UL, LI} from './link'

function Links({obj}) { 
    return ( 
        <> 
            <P>{obj.title}</P> 
            <UL> 
                { 
                    obj.data.map((d, i) => <LI key={i}> <a>{d}</a> </LI>) 
                } 
            </UL> 
        </> 
    ) 
} 

export default Links; 