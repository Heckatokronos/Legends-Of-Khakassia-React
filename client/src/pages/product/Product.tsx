import { FirstComponent, SecondComponent } from "../../components/ui";
import { productFirst, productSecond } from "../../components/other/product/Product";

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