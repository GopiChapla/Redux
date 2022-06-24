export const additem=(item)=>{
    return (
        {
            type : "ADD",
            payload : item
        }
    )
}

export const deleteitem=(index)=>{
    return (
        {
            type : "DELETE",
            payload : index
        }
    )
}
