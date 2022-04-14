import React from "react";
import "./style.css";
import  tt from "./test.css" ;
import log1 from "./apples.jpg";

const divStyle = {
  paddingLeft: '10%',
  paddingRight: '10%',
  backgroundColor : 'blue',
  textAlign: 'center',
  margin: '0%',
  fontFamily: 'Arial',
  display: 'flex'
  }
   

  

export default function App() {
  return (
    <div style={divStyle}>
      <h1 style={divStyle}>Hello StackBlitz!</h1>
      <div style={divStyle}> <h1 style={divStyle}>adam xxxx </h1>
      you are incredible
      lasdjf;lakdjf;lajsdfl
      ;jasl;dfjjadfjalsdjflajdfjdfjlasdlfkjas 
      ldfkjadfjjalsdfkjaldfkjjasdlfkj
      adslkfjalsdkjflasd
      kjfladkjfldjkf lkadjflaskdjfalsdk
      jfladksjfladskjflasdkjfladsj
      flasdjkfljjdj dfjjadfjalsdjflajdfjdfjl
      asdlfkjasldfkjadfjjalsd 
      fkjaldfkjjasdlf kjadslkfjalsdkj
      flasdkjfladkjfldj kflkadjflaskdjfalsd
      kjfladksjf
      ladskjflasdkjfladsjflasdjkfljjdj</div>
      <p style={divStyle} >Start editing to see some magic happen :)</p>
      <div>
      <img src={'./apples.jpg'} width={400} height={500}/>
        </div>

      </div>
  );
}
