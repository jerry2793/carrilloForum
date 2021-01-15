import { IconButton } from "@material-ui/core"

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useRef, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import * as actions from '../../actions/files'


const UploadWidget = props => {
    const upload = useRef()

    const [File, setFile] = useState('')
    const [isUploading, setIsUploading] = useState(false)

    const onFileUploadChange = e => {
        const file = e.target.files[0]
        setFile(file)
        setIsUploading(true)
        props.upload(file, (id, path) => {
            setIsUploading(false)
        })
    }
    
    return (<span><IconButton 
        onClick={() => upload.current.click()}
    >
      <CloudUploadIcon disabled={isUploading} />
    </IconButton>
    <input onChange={onFileUploadChange} accept='image/*' type='file' style={{ display: 'none' }} ref={upload} />
  </span>)
}

export default compose(
    connect(null, actions),
) (UploadWidget)