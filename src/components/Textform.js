import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleTrimClick = ()=>{
        let newText = text.replace(/\s+/g, ' ').trim(); 
        console.log(newText)
        setText(newText);
    }
    const clearOnClick = ()=>{
        setText(text.slice(0,0));
    }
    const copyOnClick = ()=>{
        navigator.clipboard.writeText(text)
    }
    function words(){
        let count = 0;
        let result = text.split(/\s/);
        for(let b of result){
            if(b.length!==0){
            count++;
        }
        else{}
    }
    return count;
    }

    
  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
      <textarea className={`form-control my-2 text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor: props.mode==='dark'?'#190044':'white'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleTrimClick}>Remove spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={clearOnClick}>Clear</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={copyOnClick}>Copy</button>
    </div>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1>Summary</h1>
        <p>{words()} words and {text.length} characters</p>
        <p>{0.008 * words()} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
