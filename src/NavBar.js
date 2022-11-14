import React from "react"
import './tailwind.css'


class NavBar extends React.Component{

    render()
    {
        return(
            <div className="p-5 bg-primary border-b">
                <span className="text-xl font-bold">Predictor</span> 
                <ul className="inline-flex float-right gap-8 text-l ">
                    <li className="p-2 w-24 text-center rounded-2xl  hover:bg-grey ">Login</li>
                    <li className="p-2  w-24  text-center rounded-2xl hover:bg-grey ">Register</li>
                    <li className="p-2 w-24 text-center rounded-2xl  hover:bg-grey ">About Us</li>
                </ul>
            </div>
        )
    }
}

export default NavBar;