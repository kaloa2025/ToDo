import React, { useState } from 'react'
import { Button } from '@mui/material'
import './Nav.css'
import AddIcon from '@mui/icons-material/Add'
import Todo from './Todo.js'
import { Add } from '../redux/list/action.js'
import { useDispatch } from 'react-redux'


const Home = () => {

    const[data,setData]=useState("");
    console.log(data);

    const dispatch = useDispatch();

    const addData=()=>{
        dispatch(Add(data))
        setData("")
        alert("Sucessfully Added")
    }

    return (
        <>
        <div className='container'>
            <section className='mt-3 text-center'>
                <div className='todo col-lg-6 mx-auto d-flex'>
                    
                    <input name='task' value={data} onChange={(e)=>setData(e.target.value)}
                    className='form-control'/>
                    
                    <Button variant = 'contained' className='mx-2' onClick={()=>addData()}>
                        <AddIcon/>
                    </Button>
                
                </div>
            <Todo/>
            </section>
        </div>
    </>
  )
}

export default Home