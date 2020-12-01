const toInputSearch = (e) =>{
    if(e.keyCode === 13) {
        let startCell=document.getElementsByTagName("TD")[0].getElementsByTagName('INPUT')[0]
        startCell.focus();
        startCell.style.backgroundColor = 'gray';
        startCell.style.color = 'white';
        //let cellPrev = start;
        let row=document.getElementsByTagName("TD")[0].parentNode.rowIndex;
        //devuelve el id del elemento que esta seleccionado
        let id = document.getElementById("table").rows[row].cells[0].getElementsByTagName('INPUT')[0].value
        return {startCell,id};
    }
    if(e.keyCode === 27) {
        //document.querySelector("#btn-entidades").focus();
    }
}

const cleanPrevious = (cellPrevious) =>{
    if(cellPrevious){
        cellPrevious.style.backgroundColor = 'white';
        cellPrevious.style.color = 'black';
    }
}



const toIntoTable = (e,cellPrevious) =>{
  

    let input = e.target;
    let td = input.parentNode;
    let tr = td.parentNode;
    
    let navigateTo = null;
    let cellPrev=cellPrevious;
    
    e.preventDefault()
    switch (e.keyCode) {
        case 37:
            navigateTo = navigateLeft(tr, td)
            break
        case 38:
            navigateTo = navigateUp(tr, td)
            break
        case 39:
            navigateTo = navigateRight(tr, td)
            break
        case 40:
            navigateTo = navigateDown(tr, td)
            break
        default:
            // do nothing
    }

    let id;
    if (navigateTo) {
        id = getItemCurrent(navigateTo.parentNode.rowIndex)
        input = navigateTo.getElementsByTagName('INPUT')[0]

        if (input)
            cellPrev.style.backgroundColor = '';
            cellPrev.style.color = '';
            input.focus()
            input.style.backgroundColor = 'gray';
            input.style.color = 'white';
            cellPrev=input;
    }


    return {cellPrev,id}
}

/*navegacion de la tabla*/
function navigateLeft(tr, td) {
    return document.getElementById(`${tr.getAttribute('id')}-td-${getTdId(td)-1}`)
}

function navigateRight(tr, td) { 
    return document.getElementById(`${tr.getAttribute('id')}-td-${parseInt(getTdId(td))+1}`) 
}

function navigateUp(tr, td) { 
    return document.getElementById(`tr-${getTrId(tr)-1}-${getTdWithoutTr(td)}`)
}

function navigateDown(tr, td) { 
    return document.getElementById(`tr-${parseInt(getTrId(tr))+1}-${getTdWithoutTr(td)}`)  
}

function getTdId(td) { return td.getAttribute('id').split('-')[3] }

function getTdWithoutTr(td) { return `td-${td.getAttribute('id').split('-')[3]}` }

function getTrId(tr) { return tr.getAttribute('id').split('-')[1] }


const isReadOnly = (target) => {
    return target.getAttribute('readOnly') !== null
}

//obtiene el id del elemento que esta seleccionado    
function getItemCurrent(row){
    let idCurrent=document.getElementById("table").rows[row].cells[0].getElementsByTagName('INPUT')[0].value;
    return idCurrent;
}


export default {
toInputSearch,
cleanPrevious,
toIntoTable
}