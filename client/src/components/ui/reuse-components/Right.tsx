import { Container, Grid } from "@mui/material";
import React from "react";
import { ImgStyled, TypographyStyled } from "../../styled-components";

interface ComponentProps {
    children: React.ReactNode,
    title: any,
    image: string,
}

export function RightComponent({ children, title, image }: ComponentProps) {

    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={1} rowSpacing={2}>
                    <Grid container style={{ padding: '20%' }}>
                        <Grid item sm={12} xs={12}>
                            <TypographyStyled color='secondary'>
                                {title}
                            </TypographyStyled>
                            <TypographyStyled>
                                {children}
                            </TypographyStyled>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container sm={6} xs={12}>
                    <Grid container style={{ padding: '20%' }}>
                        <Grid item sm={12} xs={12}>
                            <ImgStyled src={image} />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
