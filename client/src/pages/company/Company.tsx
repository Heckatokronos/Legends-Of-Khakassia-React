import { companyInfo, companyMain } from "../../components/other/company/Company";
import { FirstComponent, SecondComponent } from "../../components/ui";

export function Company() {

    return (
        <>
            {
                companyMain.map(({ title, description, Image }) =>
                    <FirstComponent title={title} children={description} image={Image} />
                )
            }
            {
                companyInfo.map(({ title, description, Image }) =>
                    <SecondComponent title={title} children={description} image={Image} />
                )
            }
        </>
    )

}