import React , {useState} from "react";
import {ADD_NOTE,DELETE_NOTE} from '../actions/user';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Dashboard() {

    const [title,setTitle]=useState("")
    const [desc, setDesc]=useState("")
    const dispatch = useDispatch();
    const {notes, isAuthenticated} = useSelector((state) => state.user);

    const addNote=(e)=>{
        e.preventDefault()
        if(title!=="" && desc!==""){
            dispatch({ type: ADD_NOTE, payload: {id:Math.random(), title:title,desc:desc} });
            setTitle("")
            setDesc("")
        }
        else {
            alert("Need both title and description!")
        }
     
    }

    const deleteNote=(id)=>{
        dispatch({ type: DELETE_NOTE, payload: id });
    }

    if (!isAuthenticated) {
        return <Navigate replace to="/" />
        } else {
          return (
            <div>
        <form className="note_form" onSubmit={addNote}>
        <input
          className="title" 
          type="text"
          id="title"
          name="title"
          aria-describedby="title"
          aria-invalid="false"
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="title"
          value={title}
        />

         <textarea 
          className="desc" 
          type="text"
          id="desc"
          name="desc"
          aria-describedby="desc"
          aria-invalid="false"
          onChange={(e)=>setDesc(e.target.value)}
          placeholder="description"
          value={desc}
          multiple
        />
      <button>ADD NOTE</button>
        </form>
     <h1 style={{textAlign:"center"}}>My Notes</h1>
      <div className="card_container">
        {notes.length===0 && <p>Oops...you don't have any notes</p>}
        {notes.map((item,index)=>{
            return (
            <div key={index} className="card">
             <h3>{item.title}</h3>
             <p>{item.desc}</p>
             <button onClick={()=>deleteNote(item.id)}>Delete</button>
            </div>)
        })}
      </div>
    </div>
          );
        }
      };
      



