import React from 'react';
import Box from './Box';

function Boxes() {
    const infoBoxes=[
        {info: "Plano de desenvolvimento"},
        {info: "ai q num sei o que"},
        {info: "Pnum sei o que la"},
        {info: "num sei das quanta"}
    ];

    function showBoxes(){
        return infoBoxes.map((box,index)=> 
        <Box key={index} info={box.info}/>
        );
    }
    return (
        <div className='containerSecao'>
        {showBoxes()}
        </div>
    );
}

export default Boxes;