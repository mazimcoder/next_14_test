'use server';

import * as jwt from 'jsonwebtoken';

export const signTokenAction = async (payload?: string)=>{
    if(!payload){
        throw new Error('Payload not provided');
    }
    const secret = process.env.JWT_SECRET;
    if(!secret){
        throw new Error('JWT_SECRET not found');
    }
    try{
        const signedToken = jwt.sign({payload}, secret, {expiresIn: '1h',algorithm:'HS256'});
        return signedToken;
    } catch(err){
        console.log(err);
    }
};