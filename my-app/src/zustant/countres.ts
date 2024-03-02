import { create } from 'zustand';
import axios from 'axios';
type counters ={
    idval:{
        id:number,
        imgUrl:string,
        name:string,
        ppulation:string,
        region:string,
        capitals:string,
        currons: string
    }[],
    getIdVal:(id:number)=>void
}
let useCounter= create<counters>((set)=>({
    idval:[],
    getIdVal:async (id:number)=>{
        try {
           let res= await axios.get(`http://localhost:3000/counters/${id}`)
           let dat= await res.data
           set(() => ({
            idval:[dat]
          }));
        } catch (error) {
           console.log(error); 
        }
    }
}))
export default useCounter;