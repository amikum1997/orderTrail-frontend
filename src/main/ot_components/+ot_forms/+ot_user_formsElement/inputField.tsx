import React from 'react';



function InputField({title='title' , onchange , value='' , icon , width='is-6',readonly=false,error=false,errorMsg='',placeholder='',type='text' }) {

    const returnValue = (e : any) => {
        onchange(e);
    }

    return (
        <div className={`column ${width}`}>
            <div className="field">
                <label>{title}</label>
                <div className="control has-icon">
                    <input type={type} className="input" placeholder={placeholder} value={value} onChange={(e)=>{returnValue(e)}} readOnly={readonly}/>
                    <div className="form-icon">
                        {icon}
                    </div>
                </div>
            </div>
            {
                error && <p className="help is-danger">{errorMsg}</p>
            }
        </div>
    );
}

export default InputField;



{/* <InputField
title='title'
 onchange  
 value=''  
 icon  
 width='is-6'
/> */}
