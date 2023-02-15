import React from "react";

type PropsType = {
    callback: () => void
    name: string
}

export const SuperButton = (props: PropsType) => {

    const buttonHandler = () =>{
        props.callback()
    }
    return (
        <button onClick={buttonHandler}>{props.name}</button>
    )
};