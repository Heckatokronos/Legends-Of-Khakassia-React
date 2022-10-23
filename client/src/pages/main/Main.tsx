import { secondMText } from "../../components/other/main/Main";
import { ThirdComponent } from "../../components/ui";

export function Main() {

    return (
        <>
            {
                secondMText.map(({ title, description, Image }) =>
                    <ThirdComponent title={title} children={description} image={Image} />
                )
            }
        </>
    )

}