import React  from "react";
import './test.css';
import { useState } from "react";
export default function JeuDe(){
    const [fdice,setFdice]= useState([".\\dices\\one.png",".\\dices\\two.png",".\\dices\\three.png",
    ".\\dices\\four.png",".\\dices\\five.png",".\\dices\\six.png"]);
    const [sdice,setSdice]= useState(['.\\dices\\one.png',".\\dices\\two.png",".\\dices\\three.png",
    ".\\dices\\four.png",".\\dices\\five.png",".\\dices\\six.png"]);
    const [message,setMessage] = useState(0);
    const [index1,setIndex1] = useState(0);
    const [index2,setIndex2] = useState(0);
    const [butname,setButname] = useState("let's go");
    const goodluck = () =>{
        let num1 = Math.floor(Math.random()*fdice.length);
        let num2 = Math.floor(Math.random()*sdice.length);
        setIndex1(num1);
        setIndex2(num2);
        if (num1 === num2) {
           setMessage(1);
           setButname('try again');
        }else{
            setMessage(2);
        }
    }
    return(
        <>
        <div className="float-container" style = {{marginLeft : "500px"}}>
        <h1 style = {{marginLeft : "50px"}}>Dice game !! </h1>
        <div className = "float-child"><img src ={fdice[index1]} width = "100" height = "100" alt="one" /></div>
        <div className = "float-child1"><img src={sdice[index2]} width = "100" height = "100" alt="one" /></div>
        <button class="button-15" role="button" onClick={goodluck}>{butname}</button>
			{message==1&&<div className="message success">
  <h2>Congratulations!</h2>
  <p>You've achieved an amazing milestone.</p>
			</div>}{message==2&&<div class="message failure">
  <h2>Sorry, You Lose</h2>
  <p>Better luck next time!</p>
</div>}
 

        </div>
        </>
    )
}