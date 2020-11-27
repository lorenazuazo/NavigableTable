import React from 'react';
import PropTypes from 'prop-types'

import "bootstrap/dist/css/bootstrap.min.css";
import './navigableTable.css'
import { Tr } from './ui/Tr';



export const NavigableTable = (props) => {

    const {data,loading,title,colTitle,fields} = props;
    
    //const {episode_id,title,series} = !!data && data[0];
    console.log(fields[0])
    
    //console.log(columns)
    return (
        <div >
            {title && <h5 id="table-title">{title}</h5>}
            <table className="table table-sm">
                <thead>
                    <tr>
                        { colTitle.map(col =>(
                            <th key={col}>
                                {col}
                            </th>
                        ))}
                    </tr> 
                </thead>
            </table>

            <table id="table" className="table table-sm">
                <tbody>
                {
                   !loading ? (
                       data.map(item =>(
                            <Tr key={item[fields[0]]} 
                                id={item[fields[0]]}
                                item={item}
                                fields={fields}
                                />  
                       ))
                    ):(
                        <tr>
                            <td colSpan={3}>Sin Coincidencias</td>
                        </tr>
                    )}   
                </tbody> 
            </table> 
        </div>
    )
}

NavigableTable.propTypes = {
    loading: PropTypes.bool.isRequired,
    title: PropTypes.string

}
