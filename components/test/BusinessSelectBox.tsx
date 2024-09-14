'use client'
import {DefaultCodeType, ME057Type} from "@/type/member-type";
import {ME057, ME058, ME059, ME060, ME061} from "@/constatns/member/memberContants";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
import MemberJoinSelectBox from "@/components/test/MemberJoinSelectBox";

export default function BusinessSelectBox() {

    const businessTypes: ME057Type[] = Object.values(ME057);
    const schoolListTypes: DefaultCodeType[] = Object.values(ME058);
    const organizationListTypes: DefaultCodeType[] = Object.values(ME059);
    const schoolEstablishmentListTypes: DefaultCodeType[] = Object.values(ME060);
    const organizationEstablishmentListTypes: DefaultCodeType[] = Object.values(ME061);
    const [parentCode, setParentCode] = useState<string>(ME057.SCHOOL.code)

    const handlerSelectBox = (value: string) => {
        setParentCode(value)
    }

    return (
        <>
            <section>
                <Select onValueChange={handlerSelectBox} name="businessType">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="사업자 구분 선택"/>
                    </SelectTrigger>
                    <SelectContent>
                        {businessTypes && businessTypes.map((code, index) => (
                            <SelectItem key={index} value={code.code}>
                                {code.codeName}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>



                <div className="p-2"/>
                <MemberJoinSelectBox
                    codeList={schoolListTypes}
                    handleSelectBox={handlerSelectBox}
                    placeHolder="학교 구분 선택"
                    name="schoolListType"
                />

                <div className="p-2"/>
                <MemberJoinSelectBox
                    codeList={organizationListTypes}
                    handleSelectBox={handlerSelectBox}
                    placeHolder="설립 구분 선택"
                    name="organizationListType"
                />

            </section>
        </>
    )
}