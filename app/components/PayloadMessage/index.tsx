'use client';

import { signTokenAction } from '@/app/actions/signTokenAction';
import { verifyTokenAction } from '@/app/actions/verifyTokenAction';
import { decodePayload } from '@/app/users/decodePayload';
import React, { useState } from 'react';

export const PayloadMessage = ()=>{
    const [payload, setPayload] = useState<string | null>(null);
    const [signedToken, setSignedToken] = useState<string | null>(null);
    const [verifiedPayload, setVerifiedPayload] = useState<ReturnType <typeof decodePayload>>();
    return (
        <div className='max-w-5xl w-full flex flex-col items-center justify-center gap-8'>
            <input className="w-full h-12 px-6 text-lg bg-slate-200 text-gray-800 placeholder-gray-500 border rounded-lg focus:shadow-outline" placeholder="Payload..." 
            onChange={(e=>{
                if(e.target.value === null){
                    return;
                }
                setPayload(e.target.value);
            })}/>
            <div className='flex flex-row items-center justify-center gap-8'>
                <button className='w-24 h-12 px-6 text-lg bg-slate-200 text-gray-800 border rounded-lg focus:shadow-outline'
                onClick={
                    (e) => {
                        e.preventDefault();
                        (async()=>{
                            const signed = await signTokenAction(payload!);
                            setSignedToken(signed!);
                        })();
                        
                    }
                }>
                    Sign
                </button>
                <button className='w-24 h-12 px-6 text-lg bg-slate-200 text-gray-800 border rounded-lg focus:shadow-outline'
                onClick={
                    (e) => {
                        e.preventDefault();
                        (async () => {
                            const verifiedPayload = await verifyTokenAction(signedToken!);
                            const decodedPayload = decodePayload(verifiedPayload!);
                            setVerifiedPayload(decodedPayload);
                        })();
                    }
                }>
                    Verify
                </button>
            </div>
            {signedToken ? 
                <div className="flex flex-row items-center justify-center gap-8">
                    <p className="text-gray-500 text-xs italic">signedToken</p>
                    <p className="text-gray-500 text-xs italic">{signedToken}</p>
                </div> : <div className='w-full h-4'/>
            }
            {!!verifiedPayload ? 
                <div className="flex flex-row items-center justify-center gap-8">
                    <p className="text-gray-500 text-xs italic">Verified Payload</p>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-gray-500 text-xs italic break-words">{verifiedPayload.payload}</p>
                        <p className="text-gray-500 text-xs italic break-words">{verifiedPayload.exp}</p>
                    </div>
                </div> : <div className='w-full h-8'/>
            }
        </div>
    );
};