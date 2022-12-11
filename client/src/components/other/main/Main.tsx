import time from './images/Time.png'
import clever from './images/Clever.png'
import health from './images/Health.png'
import third from './images/Third.png'
import { Typography } from '@mui/material'

export const firstMText = [
    {
        title: '',
        description: <>

        </>
    }
]

export const secondMText = [
    {
        title: 'Почему мы?',
        description: <>
            Быстрое оформление заказа
        </>,
        Image: `${time}`,
    },
    {
        description: <>
            Экологически чистый продукт
        </>,
        Image: `${clever}`,
    },
    {
        description: <>
            Косметика положительно влияет
            на ваше тело
        </>,
        Image: `${health}`,
    }
]

export const thirdMText = [
    {
        title: 'На что стоит обратить внимание',
        description: <>
            Многие не могут выбрать косметику, так как не знают методику подбора. Она довольно проста:
            <Typography sx={{ p: '1rem', mt: '-1rem', mb: '-5rem' }}>
                <p>1. Нужно знать свой тип кожи и текущее её состояние</p>
                <p>2. Состав косметических средств</p>
                <p>3. Как ваша кожа реагирует на косметику</p>
            </Typography>
        </>,
        Image: `${third}`
    },
]