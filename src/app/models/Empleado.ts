export class Empleado{
    folio:number;
    nombre:string;
    apellido: string;
    genero: string;
    salario: number;

    constructor (folio:number, nombre:string, apellido: string, genero:string, salario:number){
        this.folio = folio;
        this.nombre = nombre ;
        this.apellido = apellido ;
        this.genero = genero ;
        this.salario = salario ;
    }
}
