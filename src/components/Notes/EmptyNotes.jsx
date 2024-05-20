import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import {Box,Typography,styled} from "@mui/material"

const Container = styled(Box)`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-top:20vh;


`
const Light= styled(LightbulbOutlinedIcon)`
    font-size:200px;
    color: #c6c6c6;
`
const Text = styled(Typography)`

    color: #80868b;
    font-size: 22px;

`


function EmptyNotes() {
  return (
    <Container>

        <Light/>
        <Text>Your Notes will appear here...</Text>

    </Container>
  )
}

export default EmptyNotes
