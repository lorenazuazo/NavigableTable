const toInputSearch = (e) =>{
    if(e.keyCode === 13) {
        let start=document.getElementsByTagName("TD")[0].getElementsByTagName('INPUT')[0]
        start.focus();
        start.style.backgroundColor = 'gray';
        start.style.color = 'white';
        let cellPrevious = start;
        let row=document.getElementsByTagName("TD")[0].parentNode.rowIndex;
        //getItemCurrent(row)//devuelve el id del elemento que esta seleccionado
        return cellPrevious;
    }
}

const toIntoTable = (e) =>{

}

const cleanPrevious = (cellPrevious) =>{
    cellPrevious.style.backgroundColor = 'white';
    cellPrevious.style.color = 'black';

}

export default {
toInputSearch,
cleanPrevious
}