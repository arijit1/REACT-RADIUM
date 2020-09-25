import React from 'react';
const Person = (props) => {
    const style = {
        color: "red",
        border: "1px solid green",

    };
    return <>
        <div key={props.keys}>
            <p onClick={props.click}
                style={style}>
                My Name is {props.name}
              and my age is {props.age} years old
               {props.children}</p>
            {props.status ? <> <label htmlFor={props.keys}>change Name </label>
                <input type="text" id={props.keys} onChange={props.changed} value={props.name} /></> : <></>}
        </div>

    </>
}
export default Person;