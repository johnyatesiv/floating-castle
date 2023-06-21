import * as React from "react";
import { Splash } from "./views/Splash";

export const App = (props) => {
    eval(props.testValue);
    return (
        <>
            <Splash />
        </>
    )
};
