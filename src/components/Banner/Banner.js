import React, { useState } from 'react'
import Youtube from 'react-youtube'
import {API_KEY,imageUrl} from '../../constant/constants'
import axios from '../../axios'
import './Banner.css'
import { useEffect } from 'react'
function Banner() { 
  const [movie, setMovie] =useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results[0])
    })
  }, [])

  const opts={
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    
    <div 
    
    style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview : "1"}</h1>
            
        </div>
      <div className="fada_bottom"></div>
      
      {/* <Youtube opts={opts} videoId='F4mI4Q9WklA'/> */}
      
    </div>
    
  )
}

export default Banner
