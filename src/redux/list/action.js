import{ ADD_DATA } from "./types.js";
import{ RMV_DATA } from "./types.js";
import{ UPDATE_DATA } from "./types.js";
import axios from 'axios';

// export const Add=(items)=>{
//     return{
//         type: ADD_DATA,
//         payload : items
//     }
// }
export const Add = (task) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/tasks', { task });
      dispatch({ type: ADD_DATA, payload: response.data });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };
};
// export const Remove=(id)=>{
//     return{
//         type:RMV_DATA,
//         payload : id
//     }
// }
export const Remove = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      dispatch({ type: RMV_DATA, payload: id });
    } catch (error) {
      console.error('Error removing task:', error);
    }
  };
};

// export const Update=(item,id)=>{
//     return{
//         type:UPDATE_DATA,
//         payload : item,
//         i:id
//     }
// }
export const Update = (task, id) => {
  return async (dispatch) => {
    try {
      await axios.put(`/api/tasks/${id}`, { task });
      dispatch({ type: UPDATE_DATA, payload: { task, index: id } });
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
};