import{ ADD_DATA } from "./types.js";
import{ RMV_DATA } from "./types.js";
import{ UPDATE_DATA } from "./types.js";

export const Add=(items)=>{
    return{
        type: ADD_DATA,
        payload : items
    }
}

export const Remove=(id)=>{
    return{
        type:RMV_DATA,
        payload : id
    }
}

export const Update=(item,id)=>{
    return{
        type:UPDATE_DATA,
        payload : item,
        i:id
    }
}