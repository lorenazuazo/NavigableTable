import React from 'react';
import './tr.css';

export const Tr = (props) => {

    const {item,fields,id,colEditable,cellNavigationEventHandler}=props;
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
                                spellCheck={false}
                                defaultValue={item[field.key]}
                                readOnly={colEditable.includes(field) ? false : true}
                                onKeyDown={cellNavigationEventHandler}
                            />
                    </td>
                ))
            }
            </tr> 
        </>
    )
}
