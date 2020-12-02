import React from 'react';
import Input from "@material-ui/core/Input";

export const InputSearch = (props) => {

    const {
        id,
        inputText, 
        focus, 
        cellFilterEventHandler,
        updateTableView}=props;
   
    return (
        <>
             <Input 
                id={id}
                placeholder={inputText} 
                autoFocus={focus === inputText ? true : false}
                onKeyDown={cellFilterEventHandler}
                onClick={updateTableView}
                />
        </>
    )
}
