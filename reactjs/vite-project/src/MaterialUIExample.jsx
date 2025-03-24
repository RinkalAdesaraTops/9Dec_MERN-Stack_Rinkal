import React from 'react'
import { Button,Stack } from '@mui/material'
const MaterialUIExample = () => {
  return (
    <div>
      <h3>Material UI Example</h3>
      <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </div>
  )
}
export default MaterialUIExample
