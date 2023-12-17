import { Link } from "react-router-dom"


export default function NavBar(){
    return(
    <div className="navBar">
        <h1 id="title"><Link to={"/"} >#VanLife</Link></h1>

        <div className="nav">
        
        <Link to={"/about"} id="about">About</Link>
        <a id="vans">Vans</a>
        
        </div>
        
        
        </div>
    
    )
}