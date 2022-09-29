import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { DivContainer, DivGrid, ImgStyled, TypographyStyled } from "../../styled-components";

interface ComponentProps {
    children: React.ReactNode,
    title: any,
    image: string,
}

export function LeftComponent({ children, title, image }: ComponentProps) {

    return (
        <>
            <Container
                maxWidth='lg'
                sx={{
                    display: 'flex'
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                        <Grid xs={4}>
                            <DivContainer>
                                <DivGrid>
                                    <ImgStyled src={image} />
                                </DivGrid>
                            </DivContainer>
                        </Grid>
                        <Grid xs={8}>
                            <DivContainer>
                                <DivGrid>
                                    <TypographyStyled>
                                        {title}
                                    </TypographyStyled>
                                    <TypographyStyled>
                                        {children}
                                    </TypographyStyled>
                                </DivGrid>
                            </DivContainer>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

