import {VoidFunction} from "@/type/function-type";
import {Button} from "../ui/button";

export default function TestButton({handler}: { handler: VoidFunction }) {

    const testButtonHandler = async () =>{
        const result = await handler();
        console.log(result)
    }

    return (
        <>
            <Button variant={'default'} size={"lg"} onClick={testButtonHandler}>
                TestButton
            </Button>
        </>
    )

}