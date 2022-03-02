import React from 'react'
import formIcon from '../../image/forms_2020q4_48dp.png'
import avtIcon from '../../image/avt.png'

import {FiStar,FiSettings} from 'react-icons/fi'
import {AiOutlineEye} from 'react-icons/ai'
import {IoMdFolderOpen} from 'react-icons/io'

import {IconButton} from '@material-ui/core'

import ColorLensIcon from '@material-ui/icons/ColorLens'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'

import './Formheader.css'
function Formheader(){
    const [doc,setDoc] = React.useState('Biểu mẫu không có tiêu đề ')
    return (
        <div className ='form_header'>
            <div className ='form_header_left'>
                <img src ={formIcon} style ={{height:'45px',width:'40px'}}/>
                <input
                    type="text"
                    className='form_name'
                    value={doc}
                    onChange={(e)=>setDoc(e.target.value)}
                />
                <IoMdFolderOpen style={{marginRight:'10px',fontSize:'40px'}}/>
                <FiStar style={{marginRight:'10px',fontSize:'40px'}}/>
            </div>
            <div className ='form_header_right'>
                <IconButton style={{width:'46px',height:'46px'}}>
                    <ColorLensIcon size="small" className ='form_header_icon'/>
                </IconButton>
                <IconButton style={{width:'46px',height:'46px'}}>
                    <AiOutlineEye size="small" className ='form_header_icon'/>
                </IconButton>
                <IconButton style={{width:'46px',height:'46px'}}>
                    <FiSettings size="small" className ='form_header_icon'/>
                </IconButton>
                <Button style={{backgroundColor:'#64b',color:'#fff', margin:'0 8px'}}>Gửi</Button>
                <IconButton style={{width:'46px',height:'46px'}}>
                    <MoreVertIcon size="small" className ='form_header_icon'/>
                </IconButton>
                <IconButton style={{width:'40px',height:'40px'}}>
                    <Avatar src={avtIcon} style={{width:'30px',height:'30px'}}/>
                </IconButton>


            </div>

        </div>
    )
}

export default Formheader