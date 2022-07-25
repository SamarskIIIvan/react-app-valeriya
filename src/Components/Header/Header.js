import "./Header.css"
import img from "../../images/465080.jpeg"
import {Nav} from "../Nav/Nav";

export const Header = () =>{
    return(
        <div>
            <h1 className={"h"}>Научно-познавательный сайт о наноэлектронике как области науки (история возникнавения, развитие).</h1>
            <img src={img} alt="img" className={"img"}/>
            <Nav/>
        </div>
    )
}