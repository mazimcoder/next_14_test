'use server';

import { cookies } from 'next/headers';

export async function ServerCookiesAction(number: number){
    const userCookies = cookies().get('user');
    if(userCookies && userCookies.value === `Users-${number}`){
        return userCookies;
    }
    cookies().set('user', `Users-${number}`);
};