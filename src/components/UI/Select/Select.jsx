import React from "react";

import classes from "./Select.module.css";

export function Select({value, options, onChange}) {
    return (
        <div className={classes.selectTitle}>
            <h4>Сортировка: </h4>
            <select value={value} className={classes.selectUi} onChange={event => onChange(event.target.value)}>
            {options.map((option) => <option key={option.value} value={option.value}>{option.name}</option>)}
            </select>
        </div>
    )
}