import { Suspense } from "react";
import { validateUsers } from "./validateUsers";
import { Cookies } from "../components/Cookies";

export default async function Users({params, searchParams} : {
    params: { key: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {

    const data = await fetch('https://jsonplaceholder.org/users');
    const users = await data.json();
    const isValidUsers = validateUsers(users);
    const isValidPag = searchParams?.pag && Number(searchParams?.pag) > 0;
    const paginatedUsers = Array.from(users.slice(0,Number(searchParams.pag))) as User[];
    const elements =  isValidPag && isValidUsers &&
    paginatedUsers.map((user: User,index) => {
        return (
            <div key={user?.id || index} className="flex flex-col items-center justify-center border-t-2 gap-y-2">
                <p className="text-gray-100 text-s italic">{user?.id}</p>
                <p className="text-gray-400 text-s italic">{user?.firstname + ' ' + user?.lastname}</p>
                <p className="text-orange-400 text-s italic">{user?.email}</p>
            </div>
        )
    });
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24 overflow-y-hidden">
            <Suspense fallback={
                <div className="flex flex-col items-center justify-center gap-8">
                    <p className="text-gray-500 text-s italic">Loading...</p>
                </div>}
            >
                {elements}
                <div className="flex flex-col mt-14 items-center justify-center">
                    Cookies: <Cookies number={Number(searchParams?.pag)}/>
                </div>
            </Suspense>
        </div>
    )
}
