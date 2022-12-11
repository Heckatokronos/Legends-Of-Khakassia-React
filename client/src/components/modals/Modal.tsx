import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

interface ModalProps {
    title: string,
    label1: string,
    label2: string,
    children: React.ReactNode,
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Modalka({ children, title, label1, label2 }: ModalProps) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} variant="outlined" color="secondary">{title}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {title}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {children}
                        </Typography>
                        <TextField
                            sx={{ m: '0 auto', mt: '1rem', width: '17vw', maxWidth: 'auto' }}
                            label={label1}
                            variant='outlined'
                            required
                        />
                        <TextField
                            sx={{ m: '0 auto', mt: '1rem', width: '17vw', maxWidth: 'auto' }}
                            label={label2}
                            variant='outlined'
                            required
                        />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}