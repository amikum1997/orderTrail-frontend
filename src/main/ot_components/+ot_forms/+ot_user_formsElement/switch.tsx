import React from 'react';

function Switch({title='title' , onchange , checked=false , width='is-6' }) {
  return (
    <div className={`column ${width}`}>
    <div className="field">
        <label>{title}</label>
        <div className="thin-switch-block">
            <div className="thin-switch">
                <input id={`thin-switch-${title}`} className="input" type="checkbox" checked={checked} onChange={onchange} />
                <label htmlFor={`thin-switch-${title}`} className="slider" />
            </div>
        </div>
    </div>
</div>
  );
}

export default Switch;
