declare interface LoginFormValues{
    readonly username:string;
    readonly password:string;
}
declare interface UserContext{
    readonly username:string;
    readonly firstName:string;
    readonly lastName?:string;
    readonly email:string;
    readonly dateOfBirth:Date;
    readonly role:string;
}
declare interface RegisterFormValues{
    readonly username:string;
    readonly firstName:string;
    readonly lastName?:string;
    readonly password:string;
    readonly confirmPassword:string;
    readonly dateOfBirth?:Date;
    readonly email:string;
}
declare interface RegisterResponse{
    readonly access_token:string;
    readonly email:string;
}

declare interface VarificationFormValues{
    readonly varificatioCode?:number;
}
declare interface VarificationResponse{
    readonly access_token?:string;
    readonly forget?:boolean;
    readonly message?:string;
}

declare interface ForgetPasswordFormValue{
    readonly username?:string;
}

declare interface ForgetPasswordResponse{
    readonly access_token:string;
    readonly email:string;
}
declare interface ChangePasswordFormValues{
    readonly password?:string;
    readonly changePassword?:string;
}
declare interface LoginResponse{
    readonly access_token:string;
    readonly expire_access:number;
    readonly expire_refresh:number;
    readonly refresh_token:string;
}