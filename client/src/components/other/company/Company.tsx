import main from './images/main.png'
import our from './images/our.png'
import brand from './images/brand.png'

export const companyMain = [
    {
        title: 'О компании',
        description: <>
            Компания занимается розничной реализацией лекарственных средств физическим и юридическим лицам.
            аша компания – это аптечная сеть, которая представляет более 30 аптек.
            На данный момент они находятся в двух регионах (Республика Хакасия и Республика Тыва), с головным офисом в городе Абакане.
            Основное направление деятельности — реализация лекарственных средств населению.
        </>,
        Image: `${main}`
    },
]

export const companyInfo = [
    {
        title: 'Наша история',
        description: <>
            В 2019 году в компании появился собственный оптовый склад. Это дало возможность компании  работать с государственными заказчиками.
            Основными клиентами оптового звена являлись лечебные учреждения.
            Наша цель в это время  — осуществлять оперативную доставку высокого качества лекарственных препаратов.
        </>,
        Image: `${our}`
    },
    {
        title: 'Бренд косметики',
        description: <>
            2021 год стал для нас знаковым. Было принято решение создание своего бренда косметики.
            Мы год проводили конкурс среди заводов по производству.
            Основными критериями были: качество продукции, стабильность завода, бесперебойность производства и грамотно выстроенная логистика.
            В конце 2021 был заключен контракт с заводом-производителем. В начале 2022 года мы получили первую партию косметики под брендом <b>«Легенды Хакасии».</b>
        </>,
        Image: `${brand}`
    },
]