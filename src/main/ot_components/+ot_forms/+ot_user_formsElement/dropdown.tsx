import React from 'react';
import { ChevronDown } from 'react-feather';

function Dropdown({ title = 'title',dropdownState, dropdownToggle, onOptionSelect, optionArray=[] , value = '', width = 'is-6' , style={},isHiddenMobile,error = false, errorMsg = '' } : any) {

    const returnSelecedOption = (option : any) => {
        onOptionSelect(option);
    }

    return (
        <div className={`column ${width} ${isHiddenMobile ? 'h-hidden-mobile' : ''}`} style={{...style}}>
        <div className="field" onClick={dropdownToggle}>
            <label>{title}</label>
            <div className="control">
                <div className={`h-select ${dropdownState ? 'is-active' : ''}`}>
                    <div className="select-box">
                        <span>{value === '' ? `Select ${title}` : value}</span>
                    </div>
                    <div className="select-icon">
                        <ChevronDown/>
                    </div>
                    <div className="select-drop has-slimscroll-sm">
                        <div className="drop-inner">
                           {
                               optionArray.map((item : any , index : number)=>(
                                <div key={index} className="option-row" onClick={()=>{returnSelecedOption(item)}}>
                                <input type="radio" name="company_size" />
                                <div className="option-meta">
                                    <span>{item.value}</span>
                                </div>
                            </div>
                               ))
                           }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
        error && <p className="help is-danger">{errorMsg}</p>
      }
    </div>
    );
}

export default Dropdown;



{/* <Dropdown
title='Preperation Time'
dropdownState={dropdownMinutes}
dropdownToggle={() => { setDropdownMinutes(!dropdownMinutes) }}
onOptionSelect={(data) => { setCuisine(data.value) }}
optionArray={minutes}
value={preperationTime}
width='is-6'
/> */}