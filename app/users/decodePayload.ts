import { JwtPayload } from "jsonwebtoken";



export const decodePayload = (verifiedPayload?: string | JwtPayload)=>{
    const returnVal = {payload:'', exp: ''};

    if(!verifiedPayload){
        return returnVal;
    }
    const _payload = (verifiedPayload as JwtPayload)?.iat ? verifiedPayload as JwtPayload : null;
    if(!_payload){
        return returnVal;
    }
    const expiredAt = new Date(_payload?.exp! * 1000);
    return {
        payload: _payload?.payload,
        exp: expiredAt.toLocaleString(),
    }
};