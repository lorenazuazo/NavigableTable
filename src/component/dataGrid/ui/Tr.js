import React from 'react';
import './tr.css';

export const Tr = (props) => {

    const {item,fields,id}=props;
    //console.log(item['episode_id'])
    //console.log(Object.keys(item))
    //console.log(fields)
    return (
        <>
            <tr id={`tr-${id}`}>
            {
                fields.map(field =>(
                    <td key={`tr-${id}-td-${field}`}
                        id={`tr-${id}-td-${field}`}>
                            <input
                                defaultValue={item[field]}
                            />
                    </td>
                ))
            }
            </tr> 
        </>
    )
}
