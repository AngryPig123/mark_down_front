export const corsCheckApi = async (): Promise<object> => {
    return await fetch('http://localhost:8080/api/security/test');
}