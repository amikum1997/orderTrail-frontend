import React, { Fragment, useEffect } from 'react';

function ImageUpload({ value, onupload, multiline = false, multiple = false }) {

    const submitData = (e) => {
        onupload(multiple ? e.target.files : e.target.files[0])
        console.log(e.target.files);
        
    }

    return (
        <Fragment>
            {
                !multiple &&
                value &&
                <div className={`column ${multiline ? 'is-12' : 'is-6'}`}>
                    <div className="field">
                        <figure className="image is-square">
                            <img src={`${URL.createObjectURL(value)}`} data-demo-src={`${URL.createObjectURL(value)}`} alt="" />
                        </figure>
                    </div>
                </div>
            }
            {
                multiple &&
                value &&
                // console.log( Object.entries(value))
                Object.entries(value).map((item: any, index) => (
                    <div className={`row ml-2 mt-2`}>
                        <div className="field">
                            <div className="h-avatar is-large">
                                <img className="avatar is-squared" src={`${URL.createObjectURL(item[1])}`} data-demo-src={`${URL.createObjectURL(item[1])}`} alt="" />
                            </div>
                        </div>
                    </div>
                ))

            }
            <div className={`column ${multiline ? 'is-12' : 'is-6'}`}>
                <div className="field">
                    <div className="control">
                        <div className="file is-boxed is-primary">
                            <label className="file-label">
                                <input className="file-input" type="file" multiple={multiple} name="image" onChange={(e) => { submitData(e) }} />
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="lnil lnil-32 lnil-cloud-upload" />
                                    </span>
                                    <span className="file-label">
                                        Choose a file…
                                    </span>
                                </span>
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}

export default ImageUpload;

{/* <div className={`column ${multiline ? 'is-12' : 'is-6'}`}>
<div className="field">
    <div className="h-avatar is-large">
        <img className="avatar is-squared" src={`${URL.createObjectURL(item)}`} data-demo-src={`${URL.createObjectURL(value)}`} alt="" />
    </div>
</div>
</div> */}