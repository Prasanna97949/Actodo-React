import { useLocation } from "react-router-dom"
import Header from "./components/Header";
import Card from "./components/card";
import TodoContainer from "./components/Todocontainer";
function Landing(){
    const data = useLocation()
    return(<div className='bg-black p-10'>
        <div className='bg-[#efefef] p-10 border rounded-md'>
          <Header name={data.state.user}></Header>
          <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"blue"} title={"23 deg"} subtitle={"chennai"}></Card>
          <Card bgcolor={"red"} title={"August 14"} subtitle={"09:07:00"}></Card>
          <Card bgcolor={"yellow"} title={"Built Using"} subtitle={"React"}></Card>
          </div>
          <TodoContainer></TodoContainer>
        </div>
      </div>)
}
export default Landing