import React from 'react';
import PropTypes from 'prop-types'

import "bootstrap/dist/css/bootstrap.min.css";
import './navigableTable.css'



export const NavigableTable = (props) => {

    const {data,loading,title,columns} = props;
    
    //const {episode_id,title,series} = !!data && data[0];

    
    //console.log(columns)
    return (
        <div >
            {title && <h5 id="table-title">{title}</h5>}
            <table id="table" className="table table-sm">
                <thead>
                    <tr>
                        { columns.map(col =>(
                            <th key={col}>
                                {col}
                            </th>
                        ))}
                    </tr> 
                </thead>
                <tbody>
                {
                   !loading ? (
                       data.map(item =>(
                        <tr key={item.episode_id}>
                            <td>{item.episode_id}</td>
                            <td>{item.title}</td>
                            <td>{item.series}</td>
                        </tr>   
                       )

                       )
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
