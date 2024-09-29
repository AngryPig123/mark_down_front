import backEndApiClient from "@/util/spring-axios-util";
import {CsrfToken} from "@/type/common-type";

export const csrfAction = async (
): Promise<CsrfToken> => {
    return await backEndApiClient.post('/api/v1/csrf')
}