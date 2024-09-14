import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {DefaultCodeType} from "@/type/member-type";


type MemberJoinSelectBoxProps = {
    codeList: DefaultCodeType[],
    handleSelectBox: (value: string) => void,
    placeHolder: string,
    name: string
}

export default function MemberJoinSelectBox(
    {codeList, handleSelectBox, placeHolder, name}: MemberJoinSelectBoxProps
) {
    return (
        <>
            <Select onValueChange={handleSelectBox} name={name}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={placeHolder}/>
                </SelectTrigger>
                <SelectContent>
                    {codeList && codeList.map((code, index) => (
                        <SelectItem key={index} value={code.code}>
                            {code.codeName}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </>
    )
}