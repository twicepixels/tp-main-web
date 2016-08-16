/**
 * Created by eduray on 7/16/16.
 */
export interface User {
    id:number;
    userName:string;
    email:string;
    firstName:string;
    lastName:string;
    pseudonym:string;
    password:string;
    countryId:number;
    accountId:number;
    location:string;
}

export interface UserPass {
    oldPassword:string;
    newPassword:string;
    passwordValidation:string;
}