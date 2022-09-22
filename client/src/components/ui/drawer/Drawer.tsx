import { MenuRounded } from "@mui/icons-material";
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";
import pages from "../navigation/Pages";

const DrawerComponent = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                anchor="bottom"
            >
                <List>
                    {
                        pages.map(({ label, to }) =>
                            <Link
                                to={to}
                                onClick={() => setOpenDrawer(false)}
                                style={{ textDecoration: 'none', color: '#ce93d8' }}
                            >
                                <ListItem>
                                    <ListItemText sx={{  }}>
                                        <ListItemButton sx={{ borderRadius: '16px' }}>
                                            {label}
                                        </ListItemButton>
                                    </ListItemText>
                                </ListItem>
                            </Link>
                        )
                    }
                </List>
            </Drawer>
            <IconButton
                sx={{ marginLeft: 'auto' }}
                onClick={() => setOpenDrawer(!openDrawer)}
                color="secondary"
            >
                <MenuRounded />
            </IconButton>
        </>
    )
}

export default DrawerComponent