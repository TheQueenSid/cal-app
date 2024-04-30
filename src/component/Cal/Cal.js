import { useState } from "react"
import CalWrapper from "../Calwrapper/Calwrapper"

const Cal=()=>{

    const[inputVal,setInputVal]=useState(0);
    const[operationVal,setOperationVal]=useState(0);
    const[currentOper,setCurrentOper]=useState('');

    const allBtArr = [

     {
        value:0,
        btFun:()=>{
            setInputVal((pervValue)=> parseInt(pervValue.toString() + 0));
        },
     },

     {
        value:1,
        btFun:()=>{
            setInputVal((pervValue)=> parseInt(pervValue.toString() + 1));
        },
     },

     {
        value:2,
        btFun:()=>{
            setInputVal((pervValue)=> parseInt(pervValue.toString() + 2));
        },
     },

     {
        value:3,
        btFun:()=>{
            setInputVal((pervValue)=> parseInt(pervValue.toString() + 3));
        },
     },

     {
        value:4,
        btFun:()=>{
            setInputVal((pervValue)=> parseInt(pervValue.toString() + 4));
        },
     },

     {
        value:5,
        btFun:()=>{
            setInputVal((pervValue)=> parseInt(pervValue.toString() + 5));
        },
     },

     {
        value:6,
        btFun:()=>{
            setInputVal((pervValue)=> parseInt(pervValue.toString() + 6));
        },
     },

     {
        value:7,
        btFun:()=>{
            setInputVal((pervValue)=> parseInt(pervValue.toString() + 7));
        },
     },

     {
        value:8,
        btFun:()=>{
            setInputVal((pervValue)=> parseInt(pervValue.toString() + 8));
        },
     },

     {
        value:9,
        btFun:()=>{
            setInputVal((pervValue)=> parseInt(pervValue.toString() + 9));
        },
     },

    

    ];

    const operationArr = [

        {
            value:'+',
            btFun:()=>{
                setCurrentOper('+');
                setOperationVal(inputVal);
                setInputVal(0);
            },
        },

        {
            value:'-',
            btFun:()=>{
                setCurrentOper('-');
                setOperationVal(inputVal);
                setInputVal(0);
            },
        },

        {
            value:'*',
            btFun:()=>{
                setCurrentOper('*');
                setOperationVal(inputVal);
                setInputVal(0);
            },
        },

        {
            value:'/',
            btFun:()=>{
                setCurrentOper('/');
                setOperationVal(inputVal);
                setInputVal(0);
            },
        },

        {
            value:'=',
            btFun:()=>{
                if (currentOper === '+') {
                    setInputVal((pervValue)=>{
                        return pervValue + operationVal;
                    })
                    
                } else if (currentOper === '-') {
                    setInputVal((pervValue)=>{
                        return operationVal - pervValue;
                    })
                    
                }else if (currentOper === '*') {
                    setInputVal((pervValue)=>{
                        return pervValue * operationVal;
                    })
                }else if (currentOper === '/') {
                    setInputVal((pervValue)=>{
                        return pervValue / operationVal;
                    })
                }
            },
        },



    ];

    return(
        <div>
            
            <p>This is Cal {inputVal}</p>
            <p>{operationVal} {currentOper}</p>
            <CalWrapper allBtArr={allBtArr} operationArr={operationArr}/>
        </div>
    )
}
export default Cal