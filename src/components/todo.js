import React, { useEffect, useState } from 'react';
import TodoSvg from "../img/todo.png";

const getItems = ()=> {
    let list = JSON.parse(localStorage.getItem('lists'));

    if(list) {
        return JSON.parse(localStorage.getItem('lists'))
    }
    else {
        return []
    }
}

function Todo() {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getItems());

    const addItem = () => {
        if (!inputData) {

        } else {
            setItems([...items, inputData])
            setInputData('');
        }
    }

    // delete items
    const deleteItems = (id) => {
        console.log(id)
        let deleteBalanceItems = items.filter((elem, index) => {
            return id !== index;
            // match cheyyatha index mathram return cheyyum match cheyyunnath return cheyyilla:, that never shown
        })
        setItems(deleteBalanceItems);
    }

    // remove all
    const removeAll = ()=> {
        setItems([])
    }

    // item add in Localstorage
    useEffect(()=> {
        localStorage.setItem('lists',JSON.stringify(items))
    },[items])

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={TodoSvg} alt="todo logo" title="todo title" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="Add items.." value={inputData} onChange={(e) => { setInputData(e.target.value) }} />
                        <i className="fa fa-plus add-btn" title="add item" onClick={addItem}></i>
                    </div>

                    {
                        items.map((elem, ind) => {
                            return (
                                <div key={ind} className="showItems">
                                    <div className="eachItem">
                                        <h3>{elem}</h3>                             {/* ivide automatic fucntion call aavathirikkan arrow fun use  bakkil ittu koduthu */}
                                        <i className="fa fa-trash" title="delete items" onClick={() => deleteItems(ind)}></i>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/* clear all btn */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>CheckList</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;
