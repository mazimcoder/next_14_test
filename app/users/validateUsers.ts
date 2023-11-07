
export const validateUsers = (users: User[]):boolean => {
    if(!users || users.length === 0){
        throw new Error('Users not provided');
    }
    const isValidUsersList = users.every((user)=>{
        return user?.id && user?.firstname && user?.lastname && user?.email && user?.birthDate;
    });
    return isValidUsersList;
};