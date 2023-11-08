'use client';

import { ServerCookiesAction } from "@/app/actions/ServerCookiesAction";
import { useEffect, useState } from "react";

export const Cookies = ({number}:{
    number?: number,
}
) => {
    
    const [userNumbers, setUserNumbers] = useState<string[] | null>();

    useEffect(() => {
        (async()=>{
            const cookiesUserServer = await ServerCookiesAction(number!);

            let cookiesUserClient = '';
            if(document.cookie.indexOf(';')>0){
                const splits = document.cookie.split(';');
                const cookieUser = splits.find((item)=>{
                    return item.includes(`user`);
                });
                if(cookieUser && cookieUser.includes('=')){
                    const splits = cookieUser.split('=');
                    if(splits[0].includes('user') && splits.length>1){
                        cookiesUserClient = splits[1];
                    } 
                }
            } else if(document.cookie.includes('=')){
                const splits = document.cookie.split('=');
                if(splits[0].includes('user') && splits.length>1){
                    cookiesUserClient = splits[1];
                }
            }
            
            setUserNumbers([cookiesUserClient!,cookiesUserServer?.value!]);
        })();
    }, []);

    return (
        <>
            <p className="text-slate-200 text-s italic">Client-Cookies:{userNumbers && userNumbers?.length> 1 && userNumbers[0]}</p>
            <p className="text-slate-200 text-s italic">Server-Cookies:{userNumbers && userNumbers?.length> 1 && userNumbers[1]}</p>
        </>
    );


};