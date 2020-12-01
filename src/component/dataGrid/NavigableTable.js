import { useRef } from 'react';
import PropTypes from 'prop-types';

import "bootstrap/dist/css/bootstrap.min.css";
import './navigableTable.css';

import { Tr } from './ui/Tr';
import { InputSearch } from './ui/InputSearch';
import navigate from './helpers/navigate';
import {getFields} from './helpers/service';



export const NavigableTable = (props) => {

    const {data,
        title,
        colTitle,
        fields,
        colEditable,
        searchFields,
        focus,
        setCurrentRow} = props;

    const cellEditable = useRef(false);
    const cellInEdition = useRef(null);
    const originalText = useRef(null);
    const cellPrevious = useRef(null);

    const columns = getFields(fields);
    //const {episode_id,title,series} = !!data && data[0];
    //console.log(fields[0])

    const cellFilterEventHandler = (e) =>{
        const {startCell,id} =navigate.toInputSearch(e);
        cellPrevious.current=startCell;
        setCurrentRow(id);
    }
    
    const updateTableView = () => {
        navigate.cleanPrevious(cellPrevious.current);
        cellPrevious.current=null;
    }

     const cellNavigationEventHandler = (e) => {
        const {cellPrev,id}=navigate.toIntoTable(e,cellPrevious.current);
        cellPrevious.current=cellPrev;
        setCurrentRow(id);
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

            {
              data ? (
                <table id="table" className="table table-sm">
                    <tbody>
                        {data.map(item =>(
                            <Tr key={item[fields[0]]} 
                                id={item[fields[0]]}
                                item={item}
                                fields={columns}
                                colEditable={colEditable}
                                cellNavigationEventHandler={cellNavigationEventHandler}
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
    title: PropTypes.string,
    colTitle: PropTypes.array.isRequired,
    fields: PropTypes.array.isRequired,

}
