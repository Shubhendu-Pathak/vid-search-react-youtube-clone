import React from 'react'
import Card from 'react-bootstrap/Card';

function Videodetail(props) {
  let {videoId} = props
  return (
    <Card className="text-center" style={{width:'65%'}}>
      <Card.Body>
       <iframe 
       src={`https://www.youtube.com/embed/${videoId}?muted=0`} frameborder="1"
       height={'500px'}
       width={'100%'}
       
       ></iframe>
      </Card.Body>
     
    </Card>
  )
}

export default Videodetail