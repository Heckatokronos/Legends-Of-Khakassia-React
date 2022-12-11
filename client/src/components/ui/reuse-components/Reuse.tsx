import { Box, Grid, Stack, styled, Typography } from "@mui/material";
import { ImgStyled } from "../../styled-components";
import { Item } from "../../styled-components/Item/Item";

interface ComponentProps {
    title?: any,
    children: React.ReactNode,
    image: string,
}

const FlexBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    position: 'relative',
    mr: 'auto',
    ml: 'auto',
})

export function FirstComponent({ title, children, image }: ComponentProps) {


    return (
        <>
            <Box sx={{ flexGrow: 1, m: '0 auto' }}>
                <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                    <Typography variant="h4" sx={{ color: '#ce93d8', mt: '1rem', fontSize: '2rem auto', p: '2rem', mb: '-1.5rem' }}>
                        {title}
                    </Typography>
                    <ImgStyled src={image} />
                    <Typography sx={{ m: '0 auto', ml: 'auto', mr: 'auto' }}>
                        {children}
                    </Typography>
                </Grid>
            </Box>
        </>
    )
}

export function SecondComponent({ title, children, image }: ComponentProps) {

    return (
        <>
            <Box sx={{ flexGrow: 1, m: '0 auto' }}>
                <Item sx={{
                    width: 'auto',
                    maxWidth: 'auto',
                    mt: '1rem',
                    mb: '1rem',
                }}>
                    <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} sx={{ ml: 'auto', mr: 'auto' }} >
                        <Grid item xs={8}>
                            <Typography  sx={{ m: '0 auto', p: '2rem', fontSize: '24px', color: '#ce93d8' }}>
                                {title}
                            </Typography>
                            <Typography sx={{ m: '0 auto', mt: '-3rem', p: '2rem' }}>
                                {children}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', m: '0 auto' }}>
                            <ImgStyled src={image} sx={{
                                ":hover": {
                                    transform: 'scale(1.2)'
                                },
                                transition: 'transform .4s',
                            }} />
                        </Grid>
                    </Grid>
                </Item>
            </Box>
        </>
    )
}

export function ThirdComponent({ title, children, image }: ComponentProps) {
    return (
        <>
            <Box>
                <Typography variant="h6" sx={{ p: '2%', color: '#ce93d8', textAlign: 'center', }}>
                    {title}
                </Typography>
            </Box>
            <FlexBox>
                <Stack direction="row" sx={{ mr: 'auto', ml: 'auto' }}>
                    <Item>
                        <ImgStyled src={image} />
                        <Typography sx={{ width: '75%', ml: 'auto', mr: 'auto' }}>
                            {children}
                        </Typography>
                    </Item>
                </Stack>
            </FlexBox>
        </>
    )
}