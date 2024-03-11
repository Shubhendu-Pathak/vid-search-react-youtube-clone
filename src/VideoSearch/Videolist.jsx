import axios from 'axios';
import React, { useEffect } from 'react'
import Videoitem from './Videoitem';
import ListGroup from 'react-bootstrap/ListGroup';

function Videolist(props) {
  let {search,debounce,setDebounce,data,setData,setVideoId} = props

  // console.log(search);

  let api_key='AIzaSyADnju-adLv29hC9MA5CG2M1ofOWSF2Buo'

useEffect(()=>{

let timerId= setTimeout(()=>{
  setDebounce(search)
},1000)

return ()=>{
  clearTimeout(timerId)
}

},[search])

useEffect(()=>{
  let ytsearch =async()=>{
    await axios
    .get(`https://www.googleapis.com/youtube/v3/search`,{
      params:{
        part:'snippet',
        maxResults:10,
        key:api_key,
        q:debounce
      }
    })
    .then(response=>setData(response?.data?.items))
    .catch(err=>console.log(err))
  }
  if(debounce){
    ytsearch()
  }
},[debounce])

  return (
    <ListGroup>
  {
        data && data.map((video,index)=>{
          return <Videoitem 
          key={index} 
          video={video} 
         
          setVideoId={setVideoId}/>
        })
      }
    </ListGroup>
  
  )
}

export default Videolist