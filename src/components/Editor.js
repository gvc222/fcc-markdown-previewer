import React from 'react'

export const Editor = ( {text, setText} ) => {

    const handleChange = (e) => {
        setText(e.target.value)
    }

  return (
    <div className='editor-container'>
        <textarea name="editor" id="editor" cols="30" rows="10" onChange={handleChange} value={text}>
        </textarea>
    </div>
  )
}
