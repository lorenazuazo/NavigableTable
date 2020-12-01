function getFields(fields) {
    let field = []
    for (let i = 0; i < fields.length; i++) {
        field = field.concat({"index":i+1,"key":fields[i]})
    }
    return field
}

function getCurrentRow(id,data){
    let row = data.filter((item) => item.episode_id === +id);
    return row
}
export {
    getFields,
    getCurrentRow,
}