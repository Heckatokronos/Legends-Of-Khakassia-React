import { FirstComponent, SecondComponent } from "../../components/ui";
import { productFirst, productSecond } from "../../components/other/product/Product";
import Modal from "../../components/modals/Modal";
import { Button } from "@mui/material";

export function Product() {

    return (
        <>
            {
                productFirst.map(({ title, description, Image }) =>
                    <FirstComponent title={title} children={description} image={Image} />
                )
            }
            {
                productSecond.map(({ title, description, Image }) =>
                    <SecondComponent title={title} children={description} image={Image} />
                )
            }
        </>
    )
}