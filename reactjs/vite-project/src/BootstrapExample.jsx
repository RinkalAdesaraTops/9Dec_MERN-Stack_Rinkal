import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Stack} from 'react-bootstrap'

const BootstrapExample = () => {
  return (
    <>
    <div>
      <h4>Bootstrap Example</h4>
      <button className='btn btn-primary'>Add</button>
      <button className='btn btn-danger'>Delete</button>
    </div>
    <div>
        
    <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>
    </div>
    </>
  )
}

export default BootstrapExample
