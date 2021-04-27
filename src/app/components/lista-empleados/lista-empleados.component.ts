import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  listaEmpleados : Empleado[]=[
    {folio: 1, nombre : 'Coock', apellido: 'Madison', genero: 'Masculino', salario : 15000},
    {folio: 2, nombre : 'Stephanie', apellido: 'Anderson', genero: 'Femenino', salario : 50000},
    {folio: 3, nombre : 'Charlotte', apellido: 'Silva', genero: 'Femenino', salario : 30000},
    {folio: 4, nombre : 'Tim', apellido: 'Stellman', genero: 'Masculino', salario : 10000},
    {folio: 5, nombre : 'Cassie', apellido: 'Trovals', genero: 'Femenino', salario : 25000}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
