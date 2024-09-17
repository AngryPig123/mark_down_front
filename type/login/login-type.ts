export type MemberLoginRequestProps = {
    loginId: string | null;
    password: string | null;
}

export type MemberLoginResponseProps = {
    status: string | null;
    jwtToken: string | null;
}