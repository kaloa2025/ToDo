import React, { useState } from 'react';
import './Todo.css';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Modal } from 'react-bootstrap'; // Import Modal from 'react-bootstrap'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDispatch, useSelector } from 'react-redux';
import { Remove, Update } from '../redux/list/action.js';

const Todo = () => {
  const { User_data } = useSelector((state) => state.todoreducers);
  const dispatch = useDispatch();
  const [showEye, setShowEye] = useState(false);
  const [showEyeValue, setShowEyeValue] = useState('');
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState('');
  const [ind, setInd] = useState('');
  const handleClose = () => setShow(false);

  const remove = (id) => {
    dispatch(Remove(id));
    alert('Successfully Deleted');
  };

  const handleShow = (ele) => {
    setShow(true);
    setUpdate(ele);
  };

  const userTaskUpdate = () => {
    dispatch(Update(update, ind));
    handleClose();
  };

  return (
    <>
      <div className='todo_data col-lg-6 mx-auto mt-2'>
        {User_data.map((ele, k) => (
          <div key={k} className='todo_container d-flex justify-content-between align-items-center px-4 mb-1'>
            <li>{ele}</li>
            <div className='edit_dlt col-lg-3 py-6 d-flex justify-content-between align-items-center'>
              <ModeEditIcon
                className='editbut'
                onClick={() => {
                  handleShow(ele);
                  setInd(k);
                }}
              />
              <DeleteIcon className='deletebut' onClick={() => remove(k)} />
              <RemoveRedEyeIcon
                className='seebut'
                onClick={() => {
                  setShowEye(true);
                  setShowEyeValue(ele);
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <Modal show={showEye} onHide={() => setShowEye(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{showEyeValue}</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowEye(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Your Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='todo col-lg-6 mx-auto d-flex'>
            <input
              name='task'
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
              className='form-control col-lg-5 mt-2'
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={userTaskUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Todo;
