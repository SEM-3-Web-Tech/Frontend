import React from "react";
import './tailwind.css';
import news from './new.js'


class News extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            title:news['data'][0]["title"],
            descriptiom:news['data'][0]["description"],
            url:news['data'][0]['url'],
            token:news['data'][0]['tags'],
            current:0,
        }

    }
    changeinc=()=>{
        this.setState({ title:news['data'][this.state.current+1]["title"],
        descriptiom:news['data'][this.state.current+1]["description"],
        url:news['data'][this.state.current+1]['url'],
        tags:news['data'][this.state.current+1]['tags'],
        current:this.state.current+1,
    })
    }
    changedec=()=>{
        this.setState({ title:news['data'][this.state.current-1]["title"],
        descriptiom:news['data'][this.state.current-1]["description"],
        url:news['data'][this.state.current-1]['url'],
        tags:news['data'][this.state.current-1]['tags'],
        current:this.state.current-1,
    })
    }
    render()
    {
        return(
           <div className="flex flex-row mx-12 p-6 justify-evenly bg-primary w-42 rounded-full my-36 ">
            <button onClick={this.changedec} className="relative top-12 mx-12 my-6 w-9 h-10 font-bold p-auto text-black bg-white rounded-xl">&lt;</button>
                <div className="py-8 w-42">
                    <h2 className="font-bold">{this.state.title}</h2>
                    <p className="mt-3">Tags:</p>
                    <p className="text-red"> #{this.state.token[0]}  #{this.state.token[1]}  #{this.state.token[2]} </p>
                    <p className="my-4"><span className="font-bold text-grey ">Description:  </span>{this.state.descriptiom}</p>
                </div>
            <button className="relative top-12 mx-12 my-6 w-9 p-auto text-black h-10 font-bold bg-white rounded-xl" onClick={this.changeinc}>&gt;</button>
           </div>  
        )
    }
}


export default News;