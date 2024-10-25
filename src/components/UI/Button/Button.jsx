import React from "react";

import classes from "./styles/Button.module.css";
export function Button({children, ...props}) {
    return <button className={classes.BtnUi} {...props}>{children}</button>;
}