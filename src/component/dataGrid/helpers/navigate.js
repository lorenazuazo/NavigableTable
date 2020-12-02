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

const cleanPrevious = (e,cellPrevious,searchFields) =>{
    debugger
    let head=e.target.id
    
    if(cellPrevious){
        cellPrevious.style.backgroundColor = '';
        cellPrevious.style.color = '';
    }
    if(!searchFields.includes(head)){
        e.target.style.backgroundColor = 'gray';
        e.target.style.color = 'white';
        cellPrevious=e.target;
    }
   
}

    let cellEditable = false;
    let cellInEdition = null;
    let originalText = null;
    let id;
    let cellPrev=null;

const toIntoTable = (e,cellPrevious,colEditable) =>{
    if(cellEditable){
        cellEdition(e)
    }else{
        cellNavigation(e)
    } 

    function cellEdition(e) {
        switch (e.keyCode) {
            case 13:  
                disableCellEditing(e.target)
                //applyCellChanges(true)
                break
            case 27: 
                disableCellEditing(e.target)
                //applyCellChanges(false)
                break
            default:
                    // do nothing
        }
    }

    function cellNavigation(e) {
        const arrows = [37, 38, 39, 40]
        if (!arrows.includes(e.keyCode)) {
            e.preventDefault();
            switch (e.keyCode) {
                case 13:
                    
                    enableCellEditing(e.target)
                    break
                case 27:
                    //e.preventDefault()
                    //document.querySelector("#btn-entidades").focus();
                    cellPrevious.style.backgroundColor = '';
                    cellPrevious.style.color = '';
                    break
                default:
                    // do nothing
            }
            return
        }

        
        let input = e.target;
        let td = input.parentNode;
        let tr = td.parentNode;

        let navigateTo = null;        
        switch (e.keyCode) {
            case 37:
                e.preventDefault()
                navigateTo = navigateLeft(tr, td)
                break
            case 38:
                e.preventDefault()
                navigateTo = navigateUp(tr, td)
                break
            case 39:
                e.preventDefault()
                navigateTo = navigateRight(tr, td)
                break
            case 40:
                e.preventDefault()
                navigateTo = navigateDown(tr, td)
                break
            default:
                // do nothing
        }

        if (navigateTo) {
            id = getItemCurrent(navigateTo.parentNode.rowIndex)
            input = navigateTo.getElementsByTagName('INPUT')[0]
            if (input)
                cellPrevious.style.backgroundColor = '';
                cellPrevious.style.color = '';
                input.focus()
                input.style.backgroundColor = 'gray';
                input.style.color = 'white';
                cellPrev=input;
        }
    }
    //cellPrev=cellPrevious;
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


//obtiene el id del elemento que esta seleccionado    
function getItemCurrent(row){
    let idCurrent=document.getElementById("table").rows[row].cells[0].getElementsByTagName('INPUT')[0].value;
    return idCurrent;
}

function disableCellEditing(target) {
    cellEditable=false;
    cellInEdition=null;
    target.classList.add("caret-hidden")
}

const isReadOnly = (target) => {
     return target.getAttribute('readOnly') !== null
 }

function enableCellEditing(target) {
   
    if (!isReadOnly(target)) {
        cellEditable=true;
        cellInEdition=target;
        originalText=target.value;
        target.setSelectionRange(target.value.length, target.value.length)
        target.classList.remove("caret-hidden")
        target.removeAttribute("readOnly"); 
    }
}

export default {
toInputSearch,
cleanPrevious,
toIntoTable
}