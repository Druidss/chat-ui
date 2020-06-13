import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './Button'
import useColorSwitch from './useColorSwitch';

function App() {
  const [color,handleButton1Click] = useColorSwitch();
  // const handleButton1Click = () => {
  //   console.log("按钮1点击事件");
  // }; 
  const handleButton2Click = () => {
    console.log("按钮2点击事件");
  };
  return (

    <div> 
    <Button  width="120px" label="按钮" onClicK={handleButton1Click} > 
      <span>{1}</span>
    </Button>
    <p style={{color: color}}>这是一段文本</p>
    <Button label="点我" onClicK={handleButton2Click} /> 
    </div> 
  );
}

export default App;
