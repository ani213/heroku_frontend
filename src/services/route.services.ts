import _ from 'lodash';
interface RouteBuilderParams {
    readonly params?: object;
  }

export class RouteBuilder<T extends object>{
    constructor (private _path:string){}
    public getPath(){
        return this._path;
    }
   public build(opts:T&RouteBuilderParams){
       let path=this._path;
       let keys=Object.keys(opts);
       keys.forEach((ele:string)=>{
        path=path.replace(`:${ele}`,_.get(opts,ele));
       }) 
       return path
   }

}


export enum Routes{
    LOGIN='/login',
    DASHBOARD='/dashboard'
}
const RouteService={
    login: new RouteBuilder('/login'),
    register:new RouteBuilder('/register'),
    varification:new RouteBuilder('/varification'),
    changePassword: new RouteBuilder('/change-password'),
    dashboard:new RouteBuilder(Routes.DASHBOARD),
    addProblem: new RouteBuilder('/add-problem'),

    test:new RouteBuilder<{id:number; ani:number}>('/test/:id/:ani')
}
export default RouteService;