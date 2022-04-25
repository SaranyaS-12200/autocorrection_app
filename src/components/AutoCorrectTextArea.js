import React,{useState} from 'react';
import '../components/AutoCorrectTextArea.css';
import {SiAutohotkey} from "react-icons/si";


export function AutoCorrectTextArea() {
  const [input,setInput]=useState("");
    const corrections={
         
        realy:'really',
        wierd:'weird',
        helo:'hello',
        ggogle:'goggle',
        mondey:'monday'
    };
    
    function checkwordmatch(word){
      let allwords=word.split(" ");
      let lastTypeword=allwords[allwords.length-1];
      let currentWordlength=word.length;
      let wordtoreplace=corrections[lastTypeword];
      if(corrections[lastTypeword] !== undefined ){
        word=word.slice(0,currentWordlength - lastTypeword.length) + wordtoreplace;
      }
      setInput(word);
    }
  return (
    <div>
        <h1 className='heading'> <SiAutohotkey/> Autocorrection App</h1>
        <textarea  data-testid="textarea" 
        onChange={(event) => checkwordmatch(event.target.value)} value={input}
        rows={4} cols={50} ></textarea>
    </div>
  )
}
