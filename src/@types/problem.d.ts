declare interface Problem{
    readonly _id?:string;
    readonly user_id?:string;
    readonly title:string;
    readonly question?:string;
    readonly answer?:string;
    readonly type_id?:string;
}

declare interface ProblemType{
    readonly _id:string;
    readonly title:string;
    readonly value:string;
}