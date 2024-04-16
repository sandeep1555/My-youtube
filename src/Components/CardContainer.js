import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../Constants/useConstant';
import VedioCard from './VedioCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVedio } from '../Constants/VediosSlice';
import usePopularVedios from '../Constants/usePopularVedios';

const CardContainer = ({vedio}) => {
    
     
  return (
    vedio&& 
    <div className='w-10/12  m-2 flex flex-wrap '>
        { vedio.map((vedio)=>
        (
           <Link to={"/watch?v="+vedio.id}><VedioCard key={vedio.id} info={vedio}/></Link> 
        ))}
        
    </div>
  )
}

export default CardContainer