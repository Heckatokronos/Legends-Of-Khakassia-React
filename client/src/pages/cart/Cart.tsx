import { EmptyCart } from "../../components/ui"

export function Cart() {

    const isEmpty = [ <EmptyCart /> ]

    return (
        <>
            {
                isEmpty ? (
                    <EmptyCart />
                ) : (
                    <>
                            
                    </>
                )
            }
        </>
    )

}