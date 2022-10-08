declare interface ERROR{
    readonly title:string;
    readonly error:any;
}
declare type MyTheme='light'|'dark'

declare type ThemeColor='green'|'red'|'pink'
|'purple'|'indigo'|'blue'|'teal'
|'cyan'|'lightBlue'|'lime'
|'orange'

declare interface SortBY{
    readonly sort:string;
    readonly by:BY
}
declare type BY='asc'|'desc';
declare interface BYType{
    readonly label:string;
    readonly value:BY;
}