import { useEffect, useState } from "react";
import axios from "axios";

function TodoWithApi() {
  const [todoList, setTodoList] = useState([]);
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [error, setError] = useState(false)

  function getTodos() {
    axios.get("http://localhost:3001/todos").then((response) => {
      console.log(response.data);
      setTodoList(response.data);
    });
  }

  useEffect(() => {
    getTodos()
  }, []);

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value)
  }

  const handleSubmit = () => {
    if (titleValue === "" || descriptionValue === "") {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 4000)
    }
    else {
      const object = {
        id: new Date().getTime(),
        status: 'created',
        title: titleValue,
        description: descriptionValue
      }
      console.log(object)
      axios.post("http://localhost:3001/todos", object)
      .then((res) => {
        console.log(res)
        getTodos()
        setTitleValue('')
        setDescriptionValue('')
      })
    }
  }

  const handleDelete = (el) => {
    axios.delete(`http://localhost:3001/todos/${el.id}`)
    .then((res) => {
      console.log(res)
      getTodos()
    })
  }

  const handleEdit = (el) => {
    axios.get(`http://localhost:3001/todos/${el.id}`)
    .then((res) => {
      console.log(res.data)
      setTitleValue(el.title)
      setDescriptionValue(el.description)
      getTodos()
    })
  }

  return (
    <>
      <div>TodoWithApi</div>
      {error && <div className="alert">Empty Todo</div>}
      <div>
        <input 
          type="text" 
          placeholder="Enter Title"
          value={titleValue}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <input 
          type="text" 
          placeholder="Enter Description"
          value={descriptionValue}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </div>
      {todoList.map((el) => (
        <div key={el.id}>
          <div>Id: {el.id}</div>
          <div>Title: {el.title}</div>
          <div>Description: {el.description}</div>
          <div>Status: {el.status}</div>
          <button 
            type="button"
            onClick={()=> handleDelete(el)}
          >
              Delete
          </button>
          <button 
            type="button"
            onClick={()=> handleEdit(el)}
          >
              Edit
          </button>
          <div>==========================</div>
        </div>
      ))}
    </>
  );
}

export default TodoWithApi;
