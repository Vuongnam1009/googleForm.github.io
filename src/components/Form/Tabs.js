import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles({
    root:{
        flexGrow:1
    },
    Tab:{
        fontSize:12,
        color: '#5f6368',
        texTransform: 'capitalize',
        fontWeight:'600',
    },
    tabs:{
        height:10
    }
})
function Centeredtabs() {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <Tabs
            className={classes.tabs}
            textColor='primary'
            indicateColor='primary'
            centered
            >
                <Tab label="Question" className={classes.tab}>

                </Tab>
                <Tab label="Responses">

                </Tab>
            </Tabs>
        </Paper>
    )
}

export default Centeredtabs