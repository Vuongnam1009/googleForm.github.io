import React from "react";
import MenuIcon from '@material-ui/icons/Menu'
import {IconButton, makeStyles} from '@material-ui/core'
import Drawer  from "@material-ui/core/Drawer";
import List  from "@material-ui/core/List";
import ListItem  from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

import {FiSettings} from 'react-icons/fi'
import {BsQuestionCircle} from 'react-icons/bs'

import formsImg from '../image/forms_2020q4_48dp.png'
import docsImg from '../image/docs_2020q4_48dp.png'
import sheetsImg from '../image/sheets_2020q4_48dp.png'
import slidesImg from '../image/slides_2020q4_48dp.png'
import driveImg from '../image/drive_2020q4_48dp.png'
import googleImg from '../image/googlelogo_color_92x30dp.png'
import './Drawer.css'

const useStyles = makeStyles({
    listItem:{
        fontSize:'16px',paddingLeft:'20px',fontweight:'500'
    },
    slideImages:{
        height:'24px',width:'24px',
    }
})

function TemporaryDrawer() {
    const classes = useStyles()

    const [state,setState] = React.useState({
        left: false,
    })

    const toggleDrawer = (anchor, open) => (event) => {
        setState({...state, [anchor]:open})
    }

    const list =(anchor)=>(
        <div style={{width:'280px'}} rule= 'presentation'>
            <Divider/>
            <List>
                <ListItem>
                    <img src ={googleImg} style={{width:'74px',height:'24px'}}/>
                    <span style={{fontSize:'22px',paddingLeft:'8px'}}>Biểu mẫu</span>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem className='list_item'>
                    <img src ={docsImg} className={classes.slideImages}/>
                    <span className={classes.listItem}>Tài liệu</span>
                </ListItem>
                <ListItem className='list_item'>
                    <img src ={sheetsImg} className={classes.slideImages}/>
                    <span className={classes.listItem}>Trang tính</span>
                </ListItem>
                <ListItem className='list_item'>
                    <img src ={slidesImg} className={classes.slideImages}/>
                    <span className={classes.listItem}>Trang trình bày</span>
                </ListItem>
                <ListItem className='list_item'>
                    <img src ={formsImg} className={classes.slideImages}/>
                    <span className={classes.listItem}>Biểu mẫu</span>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem className='list_item'>
                    <FiSettings/>
                    <span className={classes.listItem}>Cài đặt</span>
                </ListItem>
                <ListItem className='list_item'>
                    <BsQuestionCircle/>
                    <span className={classes.listItem}>Trợ giúp và phản hồi</span>
                </ListItem>
            </List>
            <Divider/>
            <List>
            <ListItem className='list_item'>
                    <img src ={driveImg} className={classes.slideImages}/>
                    <span className={classes.listItem}>Drive</span>
                </ListItem>
            </List>
            <Divider/>
        </div>
    )
    return (
        <div>
            <React.Fragment>
                <IconButton onClick = {toggleDrawer('left',true)} >
                        <MenuIcon/>
                </IconButton>
                <Drawer open={state['left']} onClose={toggleDrawer('left',false)} anchor={'left'}>
                    {list('left')}
                </Drawer>
            </React.Fragment>

        </div>
    )

}

export default TemporaryDrawer