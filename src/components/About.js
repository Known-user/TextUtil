import React from 'react'

export default function About(props) {
  return (
    <>
    {console.log(props)}
    <div className="card my-5">
        <div className={`card-body bg-${props.mode}`}>
          <h5 className={`card-title text-${props.mode==='light'?'dark':'light'}`}>Welcome to Textify</h5>
          <p className={`card-text text-${props.mode==='light'?'dark':'light'}`}>Welcome to Textify, the ultimate destination for all your text manipulation needs! With our user-friendly interface and powerful set of tools, you can effortlessly transform your text exactly how you want it. Whether you're looking to convert text to uppercase or lowercase, remove extra spaces, or copy text for use elsewhere, Textify has you covered. Say goodbye to tedious manual editing and hello to seamless text manipulation at your fingertips.</p>
        </div>
      </div>
      <div className="card my-5">
        <div className={`card-body bg-${props.mode}`}>
          <h5 className={`card-title text-${props.mode==='light'?'dark':'light'}`}>Effortless Text Transformation</h5>
          <p className={`card-text text-${props.mode==='light'?'dark':'light'}`}>With Textify, transforming your text has never been easier. Simply type or paste your text into the provided input field, and explore our range of functions to achieve the desired effect. Need to make your text stand out with uppercase formatting? Want to tidy up your text by removing unnecessary spaces? With just a few clicks, you can accomplish these tasks and more. Our intuitive interface ensures that you can achieve professional-looking results without any hassle.</p>
        </div>
      </div>
      <div className="card my-5">
        <div className={`card-body bg-${props.mode}`}>
          <h5 className={`card-title text-${props.mode==='light'?'dark':'light'}`}>Simplify Your Workflow</h5>
          <p className={`card-text text-${props.mode==='light'?'dark':'light'}`}>Textify isn't just about text manipulation—it's about streamlining your workflow. With our built-in copy function, you can quickly grab your formatted text and paste it wherever you need, saving you time and effort. And when you're ready to start fresh, our clear function allows you to wipe the slate clean with a single click. Whether you're a professional writer, student, or anyone in between, Textify is here to simplify your text editing experience and help you achieve your goals with ease.</p>
        </div>
      </div>

  

    </>
  )
}
