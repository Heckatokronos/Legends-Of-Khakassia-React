import { Card, CardActions, CardContent, CardMedia, Container, IconButton, Typography, } from "@mui/material"
import { CardProps } from "./CardProps"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

interface ProductProps {
    product: CardProps
}

export function Cards(props: ProductProps) {

    return (
        <>
            <Container maxWidth='lg' sx={{ display: 'flex' }}>
                <Card sx={{ maxWidth: 345, borderRadius: '16px', margin: '2.25rem auto' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.product.image_url}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" color="secondary">
                            {props.product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.product.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton size="small" color='secondary' sx={{ borderRadius: '36px', margin: 'auto' }}>
                            <AddShoppingCartIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Container>
        </>
    )
}