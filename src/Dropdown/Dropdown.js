import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DropdownObj = () => {
    const foodOpt = [
        {label: "Fruit", value: "1"},
        {label: "Vegetable", value: "2"},
        {label: "Meat", value: "3"},
    ];

    const [value, setValue] = React.useState("fruit");

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div>

            <label >
                What do you want to eat?
                <select value={value} onChange={handleChange}>
                    {foodOpt.map((foodItem => (
                        <option value={foodItem.value}>{foodItem.label}</option>
                    )))}
                </select>
            </label>
            
            

            <p>We are eating {value} for dinner!</p>
        </div>
    )
}

export default DropdownObj;