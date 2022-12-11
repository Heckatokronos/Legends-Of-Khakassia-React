import { Container, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Item } from "../../styled-components/Item/Item";

export function EmptyCart() {
    return (
        <Container maxWidth="lg">
            <Grid display={'flex'}>
                <Grid ml={'auto'} mr={'auto'} mt={'25%'}>
                    <Item>
                        <Typography variant="h6" textAlign={'center'}>
                            Вы ещё не добавили товар в корзину, посетите <NavLink to='/catalog' style={{ textDecoration: 'none', color: 'primary' }}>каталог</NavLink> и выберите необходимую продукцию
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </Container>
    )
}
