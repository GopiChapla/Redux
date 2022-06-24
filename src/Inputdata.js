import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { additem, deleteitem } from "./Action/add";
import { TextField, Button, List, ListItem, ListItemText } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"
import { Delete } from "@mui/icons-material";
const Inputdata = () => {
    const dataitem = useSelector((state) => state.add)
    const [data, setData] = useState(0)
    const dispatch = useDispatch()
    const [item, setItem] = useState()

    const getData = (e) => {
        setItem(e.target.value)
    }

    const addData = (item) => {
        dispatch(additem(item))
        setItem("")
    }

    const deleteData = (index) => {
        setData(data + 1)
        dispatch(deleteitem(index))
    }
    const itemlist = []
    dataitem.map((item, index) => {
        itemlist.push(<><ListItem>
            <ListItemText key={index}>{item}</ListItemText>
            <Button onClick={() => deleteData(index)}><Delete /></Button>
        </ListItem></>)
    })
    return (
        <>
            <TextField
                label="Enter data"
                type="text"
                color="warning"
                variant="standard"
                onChange={(e) => getData(e)}
                value={item}
            />
            <Button
                color="success"
                variant="contained"
                size="medium"
                onClick={() => addData(item)}>
                <AddIcon /></Button>
            <hr />
            <List >
                {itemlist}
            </List>
        </>
    )
}

export default Inputdata