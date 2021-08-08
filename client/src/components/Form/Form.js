import React, { useState } from 'react';
import FileDownload from 'js-file-download';
import { TextareaAutosize, Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

import * as api from '../../api/index';

import useStyles from './styles';

export default function () {

    const classes = useStyles();

    const [test, setTest] = useState('')
  
    const handleSubmit = (event) => { 
      event.preventDefault()
      api.test({"test": test})
        .then(response => { FileDownload(response.data, 'sample.pptx') })
    }
  
    const handleChange = (event) => { 
      setTest(event.target.value)
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <TextareaAutosize minRows={8} placeholder="Copy and paste your markup here" name="test" value={test} onChange={handleChange} style={{width: '100%'}}/>
          <div className={classes.buttonGroup}>
            <Button variant="contained" type="submit" endIcon={<GetAppIcon/>}>Download Presentation</Button>
          </div>
        </form>
      </div>
    );
  }