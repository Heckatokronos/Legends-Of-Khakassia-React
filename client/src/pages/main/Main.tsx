import { Box, Container, Stack } from "@mui/material";
import { secondMText } from "../../components/other/main/Main";
import { ImgStyled, TypographyStyled } from "../../components/styled-components";
import { Item } from "../../components/styled-components/Item/Item";

export function Main() {

    return (
        <>
            <Container maxWidth="lg">
                <Box>
                    {
                        secondMText.map(({ title }) =>
                            <TypographyStyled variant="h6" sx={{ p: '2%', color: '#ce93d8', textAlign: 'center', }}>
                                {title}
                            </TypographyStyled>
                        )
                    }
                    <Box display="flex" sx={{}}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ ml: 'auto', mr: 'auto' }}>
                            {
                                secondMText.map(({ description, Image }) =>
                                    <Item>
                                        <ImgStyled src={Image} sx={{ margin: '0 auto', p: '1rem', marginLeft: 'auto', marginRight: 'auto' }} />
                                        <TypographyStyled sx={{ width: '75%', ml: 'auto', mr: 'auto', textAlign: 'center' }}>
                                            {description}
                                        </TypographyStyled>
                                    </Item>
                                )
                            }
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </>
    )

}