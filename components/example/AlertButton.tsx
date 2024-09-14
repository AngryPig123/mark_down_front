'use client'

import {Button} from "../ui/button"

export default function AlertButton() {

    const handleAlert = () => {
        alert('hello!!')
    }

    return (
        <>
            <Button
                variant="secondary"
                size="lg"
                onClick={handleAlert}
            >
                AlertButton
            </Button>
        </>
    )

}