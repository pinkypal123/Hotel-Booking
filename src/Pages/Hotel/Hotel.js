import Navbar from '../../Components/navbar/Navbar'
import './Hotel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft,faCircleArrowRight,faCircleXmark
 } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
export default function Hotel(){
    const[slideNumber,setSlideNumber]=useState(0);
    const[open,setOpen]=useState(false);
    const photos=[
        {
            src:"https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
            src:"https://images.unsplash.com/photo-1578898886225-c7c894047899?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto",
        },

        {
            src:"https://images.unsplash.com/photo-1578898886615-0c4719f932dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        {
            src:"https://images.unsplash.com/photo-1594560913036-d15f23f8a91c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        },
        {
            src:"https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
            src:"https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
            src:"https://images.unsplash.com/photo-1609949279531-cf48d64bed89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },{
            src:"https://images.unsplash.com/photo-1608198399988-341f712c3711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
            src:"https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    
        },
    ];
    const handleOpen=(i)=>{
        setSlideNumber(i);
        setOpen(true);
    }
    const handleMove=(direction)=>{
        let newSlideNumber;
        if(direction ==='l'){
            newSlideNumber=slideNumber===0?9:slideNumber-1;
        }
        else{
            newSlideNumber=slideNumber===9?0:slideNumber+1;
        }
        setSlideNumber(newSlideNumber)
    }
    return(
        <>
    <Navbar/>
    <div className='Container'>
        <img src="https://images.unsplash.com/photo-1594560913095-8cf34bab82ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"/>
    </div>
    <div className='heading'>
        <div className='h1'>WELCOME</div> 
        <div className='h2'>Free feel to take services to my hotel</div>
    </div>
<div className='hotelContainer'>
    {
        open && (
            <div className='slider'>
                <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove('l')}/>
                <div className='sliderWrapper'>
                    <img src={photos[slideNumber].src} className="sliderImg"/>
                </div>
                <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove('r')}/>
                </div>
        )
    }
</div>

<div className='imgContainer'>
    {
        photos.map((photo,i)=>{
          return  (<div className='images' key={i}>
                <div className='room'>Room-0{i+1}</div>
                <img onClick={()=>handleOpen(i)} src={photo.src}
                className="hotelImg"/>
                </div>)
        })
    }
</div>

        </>
    )
}