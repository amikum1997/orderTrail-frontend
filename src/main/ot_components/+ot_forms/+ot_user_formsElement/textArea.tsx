import React from 'react';

function TextArea({ title = 'title', onchange, value = '', row, width = 'is-6', defaultValue = '', placeholder = '', readonly = false, error = false, errorMsg = '' }) {

  const getValue = (e) => {
    onchange(e)
  }

  return (
    <div className={`column ${width}`}>
      <div className="field">
        <label>{title}</label>
        <div className="control">
          <textarea className="textarea" readOnly={readonly} rows={row} value={value} placeholder={placeholder} defaultValue={defaultValue} onChange={(e) => { getValue(e) }} />
        </div>
      </div>
      {
        error && <p className="help is-danger">{errorMsg}</p>
      }
    </div>
  );
}

export default TextArea;



{/* <TextArea
title='About Item' 
onchange={(e) => setItemDesc(e.target.value)} 
value={itemDesc}  
row={4}
width='is-12'
defaultValue='' 
placeholder='' 
/> */}