import Button from "../../Common/Button/Button"
import './Calwrapper.css'

const CalWrapper=(props)=>{

    
    const allButton = props.allBtArr.map((btObj)=>{
        return <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun}/>;
    }) ;

    const allOprBtn = props.operationArr.map((btObj)=>{
        return <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun}/>;
    }) ;
   
  
    return(
        <div className="main-cal">
         <div className="bt-name">{allButton}</div>
         <div className="op-name">{allOprBtn}</div>
        </div>
    ) 
}
export default CalWrapper