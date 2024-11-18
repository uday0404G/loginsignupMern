import { ERROR, LOADING, REGISTERSUCCESS } from "./Actiontype"

const init ={
    regdata:[],
    loading:false,
    error:""
}

const reducer=(state,{type,payload})=>{
        switch(type){
            case REGISTERSUCCESS:return{...state,regdata:payload, loading:false }
            case LOADING:return{...state, loading:true }
            case ERROR:return{...state ,error:payload }
            default: return{...state}
        }
    }

    export default reducer