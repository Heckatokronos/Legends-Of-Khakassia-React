import { Box, Stack, Typography } from "@mui/material";
import { secondMText, thirdMText } from "../../components/other/main/Main";
import { ImgStyled } from "../../components/styled-components";
import { Item } from "../../components/styled-components/Item/Item";
import { SecondComponent } from "../../components/ui";

export function Main() {

    return (
        <>
            <Box>
                {
                    secondMText.map(({ title }) =>
                        <Typography variant="h4" sx={{ color: '#ce93d8', textAlign: 'center', mt: '2rem' }}>
                            {title}
                        </Typography>
                    )
                }
                <Box display="flex">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ ml: 'auto', mr: 'auto' }}>
                        {
                            secondMText.map(({ description, Image }) =>
                                <Item sx={{
                                    ":hover": {
                                        transform: "scale(1.1)",
                                    },
                                    transition: 'transform .4s',
                                }}>
                                    <ImgStyled src={Image} sx={{ display: 'flex', margin: '0 auto', p: '1rem' }} />
                                    <Typography sx={{ width: '75%', ml: 'auto', mr: 'auto', textAlign: 'center' }}>
                                        {description}
                                    </Typography>
                                </Item>
                            )
                        }
                    </Stack>
                </Box>
            </Box>
            <Box>
                {
                    thirdMText.map(({ title, description, Image }) =>
                        <SecondComponent title={title} children={description} image={Image} />
                    )
                }
            </Box>
        </>
    )

}