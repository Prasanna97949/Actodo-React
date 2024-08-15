
import TodoItem from "./TodoItem"

function Todolist(props){
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr
    return(
        <div className="bg-purple-700 border rounded-md p-2 flex-grow">
                <h1 className="text-2xl font-medium">Today's Activity</h1>
                {activityArr.length===0?<p>You haven't add any activity yet.</p>:""}
                {
                    activityArr.map(function(item,index){
                       return <TodoItem id={item.id} item={item} index={index} activityArr={activityArr} setActivityArr={setActivityArr}/>
                    })
                }
            </div>
    )
}
export default Todolist