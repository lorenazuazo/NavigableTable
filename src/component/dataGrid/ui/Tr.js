import React from 'react';
import './tr.css';

export const Tr = (props) => {

    const {item,fields,id,colEditable}=props;
    //console.log(item['episode_id'])
    //console.log(Object.keys(item))
    
    return (
        <>
            <tr id={`tr-${id}`}>
            {
                fields.map(field =>(
                    <td key={`tr-${id}-td-${field}`}
                        id={`tr-${id}-td-${field}`}>
                            <input 
                                spellCheck={false}
                                defaultValue={item[field]}
                                readOnly={colEditable.includes(field) ? false : true}
                            />
                    </td>
                ))
            }
            </tr> 
        </>
    )
}
