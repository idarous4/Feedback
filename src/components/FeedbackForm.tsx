import React, { useState } from "react";
import { useForm } from "react-hook-form";
import{Link}from"react-router-dom";


interface FormProps{
    title: string;
    category: string
    description: string


}

function FeedbackForm() {
    const { register, handleSubmit } = useForm<FormProps>();
    const [data, setData] = useState("");


    return <div className="h:full w:full p:10">
        <div className="w:1/2 mx:auto flex flex:col justify-content:center align-items:center">

            <button className="f:bold f:black mr:40rem "> </button>

            <div className="w:full mx:auto my:20 p:20 border-radius:0.5rem b:1;solid;black bg:white">

                <h2 className="f:black ml:2rem"> Create New Feedback</h2>

                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

                    <h4 className="f:black ml:2rem mt:1rem"> Feedback Title</h4>

                    <p className="f:grey ml:2rem mt:0.5rem">Add a short, descriptive headline</p>

                    <input {...register("title")}
                        type='text'
                        className="h:3rem ml:2rem mt:0.5rem w:90% px:10 border-radius:0.25rem bg:#F2F4FF;" />
                    <h4 className="f:black ml:2rem mt:2rem">Category</h4>

                    <p className="f:grey ml:2rem mt:0.5rem">Choose a category for your feedback</p>
                    
                    <select {...register("category")} className="h:3rem w:90% bg:#F2F4FF ml:2rem mt:1rem">
                        <option value="Feature">Feature</option>
                        <option value="UI">UI</option>
                        <option value="UX">UX</option>
                        <option value="Enhancement">Enhancement</option>
                        <option value="Bug">Bug</option>
                    </select>

                    <h4 className="f:black ml:2rem mt:2rem">Feedback Detail</h4>
                    <p className="f:grey ml:2rem mt:0.5rem">Include any specific comments on what should be improved, added, etc.</p>
                    
                    <textarea {...register("description")} className="h:10rem w:90% ml:2rem mt:1rem bg:#F2F4FF" />

                    <div className="float:right mr:2.5rem">
                        <button className=" p:15;30 mt:2rem border-radius:0.5rem bg:#3A4374 f:white"> Cancel</button>
                        <button className=" p:15;30 mt:2rem ml:1rem border-radius:0.5rem bg:#AD1FEA f:white">Add Feedback</button>
                        <p>{data}</p>
                    </div>
                </form>


            </div>

        </div>
        
    </div>
}
export default FeedbackForm;