import React from 'react';
import Radium from 'radium';

const Person = (props) => {
    const style = {
        '@media (max-width:500px)': {
            width: '400px',
            backgroundColor: 'yellow'
        }
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
export default Radium(Person);