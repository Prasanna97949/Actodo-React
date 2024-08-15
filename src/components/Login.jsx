import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props){
    const navigate = useNavigate()
    const [euser,seteuser]=useState()
    const [epass,setepass]=useState()
    const [ruser,setruser]=useState(true)
    const users = props.users

    function checkUser(){
        var userfound= false
        users.forEach(function(item){
            if(item.username === euser && item.password === epass){
                console.log("loged in")
                userfound = true
                navigate("/landing",{state:{user:euser}})
            }
        })
        if(userfound === false)
        {
            console.log("login failed")
            setruser(false)
        }
    }

    function handleUinput(evt){
        seteuser(evt.target.value)
    }

    function handlePinput(evt){
        setepass(evt.target.value)
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser? <p>You can manage your activities after you Login :)</p>
                :<p className="text-red-700">Please Singup Before you Login.</p>}
                <div className="flex flex-col gap-2 my-2">
                    <input className="w-52 border rounded border-black p-1 bg-transparent" 
                    type="text" onChange={handleUinput} value={euser}
                    placeholder="Username" />
                    <input className="w-52 border rounded border-black p-1 bg-transparent" 
                    type="text" onChange={handlePinput} value={epass}
                    placeholder="Password" />
                    <button onClick={checkUser} className="bg-[#8272DA] w-24 p-1 border rounded-md">LogIn</button>
                    <p>Don't Have an Account?<Link className="text-blue-700" to={"/singup"}>SignUp</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Login