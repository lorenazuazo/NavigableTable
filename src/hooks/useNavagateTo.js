import { useRef } from 'react';

export const useNavagateTo = (e) => {
    debugger
    //const cellPrevious = useRef(null);

    if(e.keyCode === 13) {
        let start=document.getElementsByTagName("TD")[0].getElementsByTagName('INPUT')[0]
        start.focus()
        start.style.backgroundColor = 'gray';
        start.style.color = 'white';
        let cellPrevious = start
        let row=document.getElementsByTagName("TD")[0].parentNode.rowIndex
        //getItemCurrent(row)//devuelve el id del elemento que esta seleccionado
        return
    }
}
