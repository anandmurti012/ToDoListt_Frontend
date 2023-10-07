import axios from 'axios';

const baseUrl = "http://localhost:5010"

const getAllToDo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data --->', data);
        setToDo(data)
    })
}

//Save ToDO
const addToDo = (text, setText, setToDo) => {
axios
.post(`${baseUrl}/save`, {text})
.then((data) => {
    console.log(data);
    setText("")
    getAllToDo(setToDo)
})
.catch((err) => console.log(err))
}

//Update todo
const updateTodo = (toDoId, text, setToDo, setText, setIsUpdating ) => {
axios
.post(`${baseUrl}/update`, {_id: toDoId, text})
.then((data) => {
    // console.log(data);
    setText("")
    setIsUpdating(false)
    getAllToDo(setToDo)
})
.catch((err) => console.log(err))
}

//Delete todo
const deleteToDo = (_id, setToDo) => {
    axios
    .post(`${baseUrl}/delete`, { _id})
    .then((data) => {
        console.log(data);
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
    }

export {getAllToDo,addToDo,updateTodo, deleteToDo}