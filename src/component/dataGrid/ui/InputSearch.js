import React from 'react';
import Input from "@material-ui/core/Input";

export const InputSearch = (props) => {

    const {inputText, focus, cellFilterEventHandler,updateTableView}=props;
   
    return (
        <>
             <Input 
                placeholder={inputText} 
                autoFocus={focus == inputText ? true : false}
                onKeyDown={cellFilterEventHandler}
                onClick={updateTableView}
                />
        </>
    )
}
