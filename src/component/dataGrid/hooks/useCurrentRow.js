import { useState } from "react";
import { getCurrentRow } from '../helpers/service';

export const useCurrentRow = (initialState,data) => {
    const [item, setItem] = useState(initialState);

    const setCurrentRow = (id) =>{
       if(id){
          let row = getCurrentRow(id,data);//datos de la fila actual (en focus())
          setItem(row[0]);
       }
     }     
    return [item,setCurrentRow]
}
