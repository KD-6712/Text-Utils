import React, { useState } from 'react'

console.log('Enter text2 here')
export default function Textform(props) {
    const [text, setText] = useState("Write here");
    const handleUpClick = () => {
        console.log("UpperCase was clicked")
        //text variable to access kar paa rhe hai function
        let newtext = text.toUpperCase();
        
        // event.target.value me hum jo text box me jo value daal rhe hai wo aa rhi hai
        setText(newtext)
    }

    const handleLoClick = () => {
        console.log("LowerCase was clicked")
        //text variable to access kar paa rhe hai function
        let newtext = text.toLowerCase();
        // event.target.value me hum jo text box me jo value daal rhe hai wo aa rhi hai
        setText(newtext)
    }

    const handleOnChange = (event) => {
        //Whenever u click on button it returns an event
        // on change zaroori hai nhi to text area me hum kuch likh nhi pate
        console.log("Event");

        setText(event.target.value)
    }
    // text ek state variable hai, 
    
    // updating text use setText function like this setText("jdehuj")
    return (
        <>
            {/* <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div> */}
            {/* yahan par ek container add kar rha hu */}
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label for="MyBox" className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
                </div>
                {/* doing events in react with help of button  we are going to run a function on clicking the function is handleUpClick*/}

                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-2">
                <h2>Your text Summary</h2>
                <p>Words: {text.split(" ").length} and characters:{text.length}</p>
                <p> Time to read: {text.split("").length * 0.008} minutes</p>

            </div>
        </>
    )
}
