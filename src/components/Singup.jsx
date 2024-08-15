import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props){
    const navigate =useNavigate()
    const users = props.users
    const Setusers = props.Setusers
    const [euser,seteuser]=useState()
    const [epass,setepass]=useState()
    function handleUinput(evt){
        seteuser(evt.target.value)
    }
    function handlePinput(evt){
        setepass(evt.target.value)
    }
    function addUser(){
        Setusers([
            ...users,{username:euser,password:epass},
            navigate("/")
        ])
    }
    return(
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>You can singup here. :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input className="w-52 border rounded border-black p-1 bg-transparent" 
                    type="text" onChange={handleUinput} value={euser}
                    placeholder="Username" />
                    <input className="w-52 border rounded border-black p-1 bg-transparent" 
                    type="text" onChange={handlePinput} value={epass}
                    placeholder="Password" />
                    <input className="w-52 border rounded border-black p-1 bg-transparent" 
                    type="text"
                    placeholder="Confirm Password" />
                    <button onClick={addUser} className="bg-[#ffb845] w-24 p-1 border rounded-md">SingUp</button>
                    <p>Already Have an Account?<Link className="text-blue-700" to={"/login"}>Login</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Signup