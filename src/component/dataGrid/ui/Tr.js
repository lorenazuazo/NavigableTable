import React from 'react';
import './tr.css';

export const Tr = (props) => {

    const {item,
        fields,
        id,
        colEditable,
        cellNavigationEventHandler, 
        updateTableView}=props;
    //console.log(item['episode_id'])
    //console.log(Object.keys(item))

  
    return (
        <>
            <tr id={`tr-${id}`}>
            {
                fields.map(field =>(
                    <td key={`tr-${id}-td-${field.index}`}
                        id={`tr-${id}-td-${field.index}`}>
                            <input 
                                className="caret-hidden"
                                spellCheck={false}
                                defaultValue={item[field.key]}
                                readOnly={colEditable.includes(field.key) ? false : true}
                                onKeyDown={cellNavigationEventHandler}
                                onClick={updateTableView}
                            />
                    </td>
                ))
            }
            </tr> 
        </>
    )
}
