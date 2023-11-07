'use server';

import * as jwt from 'jsonwebtoken';

export const verifyTokenAction = async (token?: string)=>{
    if(!token){
        throw new Error('Token not provided');
    }
    const secret = process.env.JWT_SECRET;
    if(!secret){
        throw new Error('JWT_SECRET not found');
    }
    const payload = jwt.verify(token, secret,{
        algorithms: ['HS256'],
    });
    return payload;
};