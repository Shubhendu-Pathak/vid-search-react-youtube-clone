import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Search2(props) {
  let {search,setSearch}= props

  return (
    <div>
       <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Search Video</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={search}
          onChange={e=>setSearch(e.target.value)}
        />
      </InputGroup>
    </div>
  )
}

export default Search2