import {
    MAIN_ROUTE,
    PRODUCT_ROUTE,
    CATALOG_ROUTE,
    HISTORY_ROUTE,
    COMPANY_ROUTE,
    CART_ROUTE
} from './utils/consts'
import {
    Main,
    Product,
    Catalog,
    History,
    Company,
    Cart
} from './pages'

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: PRODUCT_ROUTE,
        Component: Product
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: HISTORY_ROUTE,
        Component: History
    },
    {
        path: COMPANY_ROUTE,
        Component: Company
    },
    {
        path: CART_ROUTE,
        Component: Cart
    },
]