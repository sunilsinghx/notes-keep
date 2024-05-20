import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import LightbulbOutlinedIcon  from "@mui/icons-material/LightbulbOutlined"
import DeleteOutlined from "@mui/icons-material/DeleteOutlined"
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined"
import {useNavigate} from "react-router-dom"




function NavList() {
  const navigate = useNavigate()
  const navlist = [
    { id: 1, name: "Notes", icon: <LightbulbOutlinedIcon />, path:"/" },
    { id: 2, name: "Archive", icon: <ArchiveOutlinedIcon />,path:"/archive" },
    { id: 3, name: "Trash", icon: <DeleteOutlined />, path: "/delete" },
  ];

  return (
    <List>
      {navlist.map(list => (
        <ListItem key={list.id}>
          <ListItemButton style={{paddingLeft:"0px"}} onClick={()=>navigate(list.path)}>
            <ListItemIcon >{list.icon}</ListItemIcon>

            {list.name}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default NavList;
