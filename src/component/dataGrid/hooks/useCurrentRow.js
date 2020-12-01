import { useState } from "react";
import { getCurrentRow } from '../helpers/service';

export const useCurrentRow = (initialState,data) => {
    const [item, setItem] = useState(initialState);
    let keys =Object.keys(initialState);

    const setCurrentRow = (id) =>{
        let row = getCurrentRow(id,data);

         for (let i in keys) {
            let campo=keys[i];
            let propiedad=row[0][keys[i]];
            setItemState(campo,propiedad)  
         }

          function setItemState(campo,propiedad){ 
             setItem(item =>({
                ...item,
                [campo]:propiedad
               })) 
          }
         
    }
    return [item,setCurrentRow]
}
