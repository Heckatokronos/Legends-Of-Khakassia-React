import React, { FC } from 'react';
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import {
    ShoppingCartRounded,
} from '@mui/icons-material';
import pages from './Pages'
import { Link } from 'react-router-dom';
import DrawerComponent from '../drawer/Drawer';

export const Navigation: FC = () => {

    const [value, setValue] = React.useState();

    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AppBar position='static' color="transparent">
            <Toolbar>
                {
                    isMatch ? (
                        <>
                            <Typography
                                variant='h6'
                                noWrap
                                component='div'
                                color='secondary'
                                sx={{ margin: 'auto' }}
                            >
                                Легенды Хакассии
                            </Typography>
                            <DrawerComponent />
                        </>
                    ) : (
                        <>
                            <Button
                                sx={{
                                    margin: 'auto',
                                    textTransform: 'none',
                                    '&:hover': {
                                        boxShadow: 'none',
                                        backgroundColor: '#11ffee00',
                                    },
                                }}
                                href='/'
                            >
                                <Typography
                                    variant='h6'
                                    noWrap
                                    component='div'
                                    color='secondary'
                                    sx={{ margin: 'auto' }}
                                >
                                    Легенды Хакассии
                                </Typography>
                            </Button>
                            <Box sx={{ margin: 'auto' }}>
                                <Tabs onChange={(e, value) => setValue(value)} value={value} key={0} textColor='secondary' indicatorColor="secondary" >
                                    {
                                        pages.map(({ label, to }) =>
                                            // @ts-expect-error
                                            <Tab
                                                sx={{
                                                    fontStyle: "normal",
                                                    fontWeight: 400,
                                                    fontSize: "15px",
                                                    marginRight: "1.5rem",
                                                    borderRadius: '0px',
                                                    textTransform: 'none'
                                                }}
                                                to={to}
                                                label={label}
                                                LinkComponent={Link}
                                            />
                                        )
                                    }
                                </Tabs>
                            </Box>
                            <IconButton
                                size='large'
                                edge='end'
                                color='secondary'
                                sx={{
                                    margin: 'auto'
                                }}
                                href='/cart'
                            >
                                <ShoppingCartRounded />
                            </IconButton>
                        </>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}