    import React,{useState} from 'react'

    
 

    export default function About() {

        const [myStyle, setStyle] = useState( {
            color: 'white',
            backgroundColor:'black'
        });

        const toggleStyle = () =>{
            console.log("toggleStyle was clicked")
             if(myStyle.color === "white")
             {
                setStyle({
                    color: 'black',
                    backgroundColor:'while'
                })
                setButton("Light")
             }
             else{
                setStyle({
                    color: 'white',
                    backgroundColor:'black'
                })
                setButton("Dark")
             }
             
        }

        const [myButton, setButton] = useState("Dark");

    return (
            <div className="container" style={myStyle}>
            <h1 classname="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" style={myStyle}>
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                Data1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" style={myStyle}>
            <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" style={myStyle}>
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        <button  onClick={toggleStyle} type="button" className="btn btn-dark my-3">{myButton}</button>
    </div>
        )
        }
