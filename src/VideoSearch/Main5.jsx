import React, { useState } from 'react'
import Search2 from './Search2'
import Videolist from './Videolist'
import Videodetail from './Videodetail'

function Main5() {
    let [search,setSearch] = useState('')
    let [ debounce,setDebounce]= useState(search)
    let [data,setData]=useState([])
    let [videoId,setVideoId]= useState('')

  return (
    <div className='row d-flex flex-column border border-success'>
      <div className="col-12 col-md-4 w-75 my-3 m-auto">
      <Search2 search={search} setSearch={setSearch}/>
      </div>
<div className="d-flex justify-content-between  col-12 flex-column flex-md-row">
{
        videoId ?  <Videodetail videoId={videoId}/> :''
       }
        <Videolist 
        search={search} 
        debounce={debounce}
        setDebounce={setDebounce}
        data={data}
        setData={setData}
        setVideoId={setVideoId}
        />
</div>
    </div>
  )
}

export default Main5