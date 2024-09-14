'use server'

import {redirect} from "next/navigation"

export type TestRequest = {
    name: string
    content: string
    businessType:string
}

export const testPostAction = async (
    prevState: any,
    formData: FormData
): Promise<{ message: string }> => {

    console.log('test')
    console.log(formData)

    for (let key of formData.keys()) {
        if (key.startsWith('$')) {
            formData.delete(key); // '$'로 시작하는 키들 삭제
        }
    }
    const rawData = Object.fromEntries(formData);
    console.log(rawData)
    // try {
    //     await fetch('http://localhost:8080/test', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             name: rawData.name,
    //             content: rawData.content,
    //         })
    //     })
    //         .then((response) => {
    //             console.log(response)
    //         })
    //     ;
    // } catch (error) {
    //     console.log(error)
    // }
    redirect('/test')

}