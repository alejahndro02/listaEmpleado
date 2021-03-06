import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  //con @input se pasaran los datos del componente padre a hijo 
  @Input() todos: number;
  @Input() masculino: number;
  @Input() femenino: number;

  //Con Qoutput se pasaran los datos del componente hiijo al padre
  @Output() radioButtonChange = new EventEmitter<string>();
  radioButtonSelect = "Todos";
  constructor() { 
    this.todos = 0;
    this.masculino = 0;
    this.femenino = 0;

   }

  ngOnInit(): void {
  }

  radioChange():void{
    this.radioButtonChange.emit(this.radioButtonSelect);
  }
}
