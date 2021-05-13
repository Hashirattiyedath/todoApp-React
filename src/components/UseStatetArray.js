import React, {useState} from 'react';

const UseStatetArray = () => {

    var bioData = [
        {
            id: 1, name: "hashir", age: 25
        },
        {
            id: 2, name: "john", age: 26
        },
        {
            id: 3, name: "raheem", age: 21
        }
    ]
    
    const [array, setArray] = useState(bioData);

    const clearArray = ()=> {
        setArray([])
    }

    return (
        <>
            {/* <h1>Name: Hashir & Age : 26</h1> */}
            {
                array.map((curElm) => <h1 key={curElm.id}>Name: {curElm.name} & Age : {curElm.age}</h1>)
            }
            <button className="btn" onClick={clearArray}>Clear The Data</button>
        </>
    )
}

export default UseStatetArray;