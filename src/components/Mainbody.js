import React from 'react'
import './Mainbody.css'
import StorageIcon from '@material-ui/icons/Storage'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton} from '@material-ui/core'

import docChatIcon from '../image/dos_chat.png'


function Mainbody() {
    return (
        <div className="main_body">
            <div className="mainbody_top">
                <div className="mainbody_top_left">
                    Biểu mẫu gần đây
                </div>
                <div className="mainbody_top_right">
                    <div className="mainbody_top_center">
                        Do mọi người sở hữu
                        <ArrowDropDownIcon/>
                    </div>
                    <IconButton>
                        <StorageIcon style={{fontSize:'16px', color:'black'}}/>
                    </IconButton>
                    <IconButton>
                        <SortByAlphaIcon style={{fontSize:'16px', color:'black'}}/>
                    </IconButton>
                    <IconButton>
                        <FolderOpenIcon style={{fontSize:'16px', color:'black'}}/>
                    </IconButton>
                </div>

            </div>
            <div className="mainbody_docs">
                <div className="doc_card">
                    <img src ={docChatIcon} className='doc_card_img' alt='no img'/>
                    <div className='doc_card_content'>
                        <h5>CHẤT CLOTHES</h5>
                        <div className="doc_content">
                            <div className='content_left'>
                                <StorageIcon style={{color: 'white',backgroundColor: '#6e2594',padding:'3px',marginRight: '6px',borderRadius:'2px',fontSize:'16px'}}/>
                                Đã mở 22 thg 2, 2022
                            </div>
                            <IconButton style={{width:'28px',height:'28px'}}>
                                <MoreVertIcon />
                            </IconButton>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Mainbody