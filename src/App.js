
import './App.css';
import React,  { useState } from 'react'
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';


function App() {

  const [ text, setText ] = useState(`# Welcome to my React Markdown Previewer!
  ## You can use this text editor at the top and see a live preview at the bottom...
  ### For headers, h1 = #, h2 = ##, and so on and so forth. Give it a try and set an h6 header under this!
  ###### 
  
  Here's some code, <div></div>, between 2 backticks. Take out the backticks and it will turn off the 'code' view.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\\\`\\\`\\\`' && lastLine == '\\\`\\\`\\\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  
  There's also [links](playtimediary.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![CAT](https://i.pinimg.com/originals/85/24/97/852497253eb794aba6237f06cc9f3790.jpg)`)

  return (
    <div className="App">
      <h1>Edit here using Markdown</h1>
      <Editor text={text} setText={setText} />
      {/* Pass text and setText as props */}
      <h1>Preview</h1>
      <Preview text={text}/>
    </div>
    );
  }

export default App;

