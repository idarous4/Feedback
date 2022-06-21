import React, { useState } from "react";

function Cards() {
    const [count, setCount] = useState(0)
    return <div
        className=" h:72px w:825px mx:auto my:20 p:20 border-radius:0.5rem bg:#373F68 " >
        <button className=" p:9;13 border-radius:0.5rem bg:#AD1FEA f:white cursor: pointer float:right"
            onClick={() => setCount((count) => count + 1)}> + Add Feedback </button>
        <h3 className=" f:black"> {count} Suggestions</h3>


    </div>



}
export default Cards;