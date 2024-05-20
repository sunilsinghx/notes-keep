/* eslint-disable react/prop-types */
import { styled} from '@mui/material/styles';
import {AppBar,Toolbar,Typography,IconButton} from '@mui/material';
import Menu from '@mui/icons-material/Menu';



const Header = styled(AppBar)`
z-index:1201;
background:#fff;
height:70px;
box-shadow:inset 0 -1px 0 0 #dadce0
`
const Heading = styled(Typography)`

  color: #5f6368;
  font-size: 25px;

`



function HeaderBar({open,handleDrawer}) {
  return (
    <Header  open={open}>
        <Toolbar>
          <IconButton
            
            onClick={handleDrawer}
            edge="start"
           
          >
          <Menu />
          </IconButton>
          <img src="https://logowik.com/content/uploads/images/google-keep3316.jpg" style={{height:"50px",padding:0}} alt="logo"/>
          <Heading>Keep</Heading>
        </Toolbar>
      </Header>
  )
}

export default HeaderBar