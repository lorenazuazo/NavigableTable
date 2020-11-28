import React,{ useRef } from 'react';
import PropTypes from 'prop-types';

import "bootstrap/dist/css/bootstrap.min.css";
import './navigableTable.css';

import { Tr } from './ui/Tr';
import { InputSearch } from './ui/InputSearch';
import navigate from './helpers/navigate';


export const NavigableTable = (props) => {

    const {data,loading,title,colTitle,fields,colEditable,searchFields,focus} = props;

    const cellPrevious = useRef(null);

    //const {episode_id,title,series} = !!data && data[0];
    //console.log(fields[0])
    

    const cellFilterEventHandler = (e)=>{
        cellPrevious.current=navigate.toInputSearch(e)
    }

    const updateTableView = ()=>{
        debugger
        navigate.cleanPrevious(cellPrevious.current)
        //console.log(cellPrevious.current)
    }

    return (
        <div >
            {title && <h5 id="table-title">{title}</h5>}
            <table className="table table-sm">
                <thead>
                    <tr>
                        { colTitle.map(col =>(
                            <th key={col}>
                            {
                                searchFields.includes(col) ? (
                                    <InputSearch 
                                        inputText={col} 
                                        focus={focus}
                                        cellFilterEventHandler={cellFilterEventHandler}
                                        updateTableView={updateTableView}
                                        />
                                    ):(
                                        <p id="p-header">{col}</p>
                                    )
                            }
                            </th>
                        ))}
                    </tr> 
                </thead>
            </table>

            {loading && <div className="alert alert-info text-center">Buscando Datos...</div>}
            {
              data ? (
                <table id="table" className="table table-sm">
                    <tbody>
                        {data.map(item =>(
                            <Tr key={item[fields[0]]} 
                                id={item[fields[0]]}
                                item={item}
                                fields={fields}
                                colEditable={colEditable}
                                />  
                       ))}
                    </tbody> 
                </table>   
              ):(
                <div className="alert alert-info text-center">Sin Coincidencias</div>
              )
          }                
        </div>
    )
}

NavigableTable.propTypes = {
    loading: PropTypes.bool.isRequired,
    title: PropTypes.string,
    colTitle: PropTypes.array.isRequired,
    fields: PropTypes.array.isRequired,

}
