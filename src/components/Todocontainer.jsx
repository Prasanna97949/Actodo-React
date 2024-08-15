import Addtodoform from "./AddTodoform"
import Todolist from "./Todolist"
import { useState } from "react"
function TodoContainer(){
    const [activityArr,setActivityArr]= useState([{
        id:1,
        activity:"Go for a walk"
    },
{
    id:2,
    activity:"Have Breakfast"
}])
    return(
        <div>
         <div className="flex flex-wrap gap-1">
            <Addtodoform activityArr={activityArr} setActivityArr={setActivityArr}></Addtodoform>
            <Todolist activityArr={activityArr} setActivityArr={setActivityArr}></Todolist>
         </div>
        </div>
        
    )
}
export default TodoContainer