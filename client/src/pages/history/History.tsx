import { historiesInfo, historiesMain } from "../../components/other/histroies/Histories";
import { FirstComponent, SecondComponent } from "../../components/ui";

export function History() {

    return (
        <>
            {
                historiesMain.map(({ title, description, Image }) =>
                    <FirstComponent title={title} children={description} image={Image} />
                )
            }
            {
                historiesInfo.map(({ title, description, Image }) =>
                    <SecondComponent title={title} children={description} image={Image} />
                )
            }
        </>
    )
}