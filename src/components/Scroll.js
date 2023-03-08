import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {  FaArrowUp } from 'react-icons/fa';
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
    onTop: {
        zIndex:2,
        position: 'fixed',
        bottom: '2vh',
        backgroundColor: '#ffc107',
        color: '#fff',
        "&:hover, &.Mui-focusVisible" :{
            transition: '0.3s',
            color: '#fff',
            backgroundColor: '#ffc109'
        },
        right: '3%'
    }
}))

const Scroll = ({showBelow}) => {

    const classes = useStyles()

    const [show, setShow] = useState(showBelow ? false : true);

    const handleScroll = () => {
        if(window.pageYOffset > showBelow){
            if(!show) setShow(true)
        } else {
            if(show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top:0, behavior: `smooth`})
    }

    useEffect(() => {
        if(showBelow){
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })
    return (
        <div>
          {show &&
            <IconButton onClick={handleClick} className={classes.onTop} >
            <FaArrowUp/>
            </IconButton> 
          } 
        </div>
    )
}

export default Scroll
