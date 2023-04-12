export class Heroe{
    constructor(
        public id:number,
        public nombre:string,
        public poder:string,
        public identidad?:string /*Esta opcion es opcional por eso tienen al final el signo "?"*/
    ){}
}