import React from 'react'
import TextField from '@mui/material/TextField';
import Image from "next/image"
import logo from '../../assets/Instagram.jpeg';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
 export default function  

() {
  return (
    <div className='signup-container'>
        <div className='signup-card'>
            <Image src={logo}/>
        <TextField id="outlined-basic" size="small" label="Email" variant="outlined" fullWidth margin='dense'/>
        <TextField id="outlined-basic" size="small" label="Full Name" variant="outlined" fullWidth margin='dense'/>
        <TextField id="outlined-basic" size="small" label="Password" variant="outlined" fullWidth margin='dense' type="password"/>
        <Button variant="outlined" component="label" fullWidth color='secondary' size='small'>
       <IconButton color='secondary'> <CloudUploadIcon/></IconButton>
          UPLOAD PROFILE IMAGE
           <input hidden accept="image/*" multiple type="file" />
      </Button>

  <Button  style={{marginTop:"1rem"}} variant="contained" component="label" fullWidth>SIGNUP</Button>
  <div className="tnc" > By signing up, you agree to our Terms, Conditions and Cookies policy.</div>

        </div>

        <div className='bottom-card'>Already Have An Account ? <span style={{color:'blueviolet'}}>Login</span></div>

    </div>
  )
}
