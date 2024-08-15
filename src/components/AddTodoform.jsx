import { useState } from "react"

function Addtodoform(props){
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr
    const [newActivity,setNewActivity]=useState("")
    function handleChange(evt){
        setNewActivity(evt.target.value)
    }
    function addActivity(){
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newActivity}])
        setNewActivity("")
    }
    return(
        <div className="flex-grow-0">
                <h1 className="text-2xl font-medium my-2">Manage Activities</h1>
                <input value={newActivity} onChange={handleChange} type="text" className="border border-black rounded bg-transparent p-1" placeholder="Next Activity?" />
                <button onClick={addActivity} className="p-1 bg-black text-white mx-2 border rounded">Add</button>
            </div>
    )
}
export default Addtodoform