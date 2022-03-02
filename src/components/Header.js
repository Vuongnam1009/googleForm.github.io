import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import {IconButton} from '@material-ui/core'
import  Avatar from '@material-ui/core/Avatar'
import imgAvt from '../image/avt.png'
import formimg from '../image/forms_2020q4_48dp.png'
import TemporaryDrawer from './TemporaryDrawer'

function Header() {
    return (
        <div className="header">
            <div className="header_info">
                <TemporaryDrawer/>
                <img src ={formimg} style ={{height:'40px',width:'40px'}} alt='no_image' />
                <div className="form">
                    Forms
                </div>


            </div>
            <div className="header_search">
                <IconButton style ={{height:'40px',width:'40px',margin:'0 8px'}}>
                    <SearchIcon/>
                </IconButton>
                <input type="text" name="search" placeholder="Tìm kiếm"/>

            </div>
            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <Avatar>
                    <img src={imgAvt}/>
                </Avatar>
            </div>

        </div>
    )
}

export default Header
