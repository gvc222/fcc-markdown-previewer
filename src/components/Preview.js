import React from 'react';
// import { marked } from 'marked';
import Markdown from 'react-markdown'

export const Preview = ({text}) => {
  return (
    <div id='preview'>
        {/* <div dangerouslySetInnerHTML={{__html: marked(text)}}></div> */}
        <Markdown>{text}</Markdown>
        
    </div>
  )
}
