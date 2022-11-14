import React from "react";
import './tailwind.css'

class Footer extends React.Component{
    render()
    {
        return(
            <div className="flex flex-row justify-evenly bg-black text-red p-8 mt-44">
                <div>
                Avanish Shenoy
                </div>
                <div>
                Charutha
                </div>
                <div>
                B Moniiiiiiiiiiiiiish Moger
                </div>
            </div>
        )
    }
}

export default Footer;