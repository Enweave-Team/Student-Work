import React from 'react';
import "./File.scss";

import {ReactComponent as Gear} from '../../assets/gear.svg';


const File = () => {

    const [files, setFiles] = React.useState('');

    const handleChange = event => {
        const fileUploaded = event.target.files;
        setFiles(fileUploaded);


    };
let _files = [...files];

    function removeFile(name: string) {
        setFiles(_files.filter(item=>item.name != name))
    }

    return (
        <div className="file-data">

            <input
                type="file"
                multiple
                onChange={(e) => handleChange(e)}
                // accept=".zip"
            />

            {files.length>0 ?
                <ul className="file-list absolute-center">
                    {_files.map((file, index) => (
                        <li key={index} className="file-item">
                            <span>{file.name}</span>
                            <button
                                className="remove-file"
                                onClick={()=> removeFile(file.name)}>remove</button>
                        </li>
                    ))}
                </ul>
                :
                <div className="no-files absolute-center">
                    <h3>Прикрепить файлы</h3>
                    <h4>No Files</h4>
                    <Gear/>
                </div>
            }


        </div>
    );
}
export default File;