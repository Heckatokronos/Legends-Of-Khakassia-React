import { Box, Container, Grid } from "@mui/material";
import { ImgStyled, TypographyStyled } from "../../styled-components";

interface ComponentProps {
    title?: any,
    children: React.ReactNode,
    image: string,
}

export function FirstComponent({ title, children, image }: ComponentProps) {


    return (
        <>
            <Container
                maxWidth='lg'
                sx={{
                    display: 'flex',
                }}
            >
                <Box sx={{ flexGrow: 1, m: '0 auto' }}>
                    <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                        <TypographyStyled variant="h6" sx={{ color: '#ce93d8', mt: '1rem', fontSize: '2rem auto', p: '2rem', mb: '-1.5rem' }}>
                            {title}
                        </TypographyStyled>
                        <ImgStyled src={image} />
                        <Box>
                            <TypographyStyled>
                                {children}
                            </TypographyStyled>
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export function SecondComponent({ title, children, image }: ComponentProps) {

    return (
        <>
            <Container
                maxWidth='lg'
                sx={{
                    display: 'flex',
                }}
            >
                <Box sx={{ flexGrow: 1, m: '0 auto' }}>
                    <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                        <Grid xs={8}>
                            <Box sx={{ backgroundColor: 'blur(10px)', borderRadius: '1rem' }}>
                                <TypographyStyled sx={{ color: '#ce93d8', p: '2rem', margin: '0 auto', mt: '4.5rem', fontSize: '24px' }}>
                                    {title}
                                </TypographyStyled>
                                <TypographyStyled sx={{ mt: '-2rem', p: '2rem' }}>
                                    {children}
                                </TypographyStyled>
                            </Box>
                        </Grid>
                        <Grid xs={4} sx={{ m: '0 auto', mt: '2rem' }}>
                            <ImgStyled src={image} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}