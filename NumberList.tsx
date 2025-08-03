//ITERATING WITH INDEX

import React from 'react';

const NumberList:React.FC = () => {
    const numbers = [10, 20, 30, 40, 50];
    return(
        <>
        <div className="container m-2">
            <div className="row mt-4 ">
                <div className="btn btn-danger m-2">
                  <h2>Number List with index</h2>
                </div>
               
                <ul>
                    {numbers.map((number, index) =>(
                        <li key={index}>
                            Item {index+1}: {number}
                        </li>

                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}

export default NumberList;