function Header(props){
    const name= props.name
    return(
        <>
        <h1 className="text-3xl font-medium">Hello {name}!</h1>
        <p>I help you manage your activity :)</p>
        </>
        
    )
}
export default Header