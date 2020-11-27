import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
//import { Input } from './Input';


export const NavigableTable = () => {
    return (
        <div id="container-left">
            <table id="table" className="table table-sm">
                
                <thead>
                    <tr>
                        <th>
                          Nombre
                        </th>
                        <th>
                          Apellido
                        </th>
                    </tr> 
                </thead>
                <tbody>
                    <tr>
                        <td>Lorena</td>
                        <td>zuazo</td>
                    </tr>   
                </tbody> 
            </table> 
        </div>
    )
}
