import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Angular Crud';
  employees = [
    {name : 'Fazt', position: 'manger', email: ""},
    {name : 'Juan', position: 'Senior', email: ""},
    {name : 'Pedro', position: 'developer', email: ""}
  ];
  
  model: any = {};
  model2: any = {};
  msg: string = "";
  hideUpdate: boolean = true;

  addEmployee(): void{
    if (this.model.name !== '') {
      this.employees.push(this.model);
      this.msg = 'Campo agregado';
      this.clearDatos();
    }
    this.clearDatos();
  }

  clearDatos(): void{
    this.model2.name = null;
    this.model2.position = null;
    this.model2.email = null;
  }
  deleteEmployee(i: number): void{
    var answer = confirm('Estas seguro querer eliminarlo?');
    if (answer) {
      this.employees.splice(i, 1);
      this.msg = 'Campo eliminado';
    }
    
  }

  myValue: number | undefined;
  editEmployee(i: number): void{
    this.hideUpdate = false;
    this.myValue = i;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
  }

  updateEmployee(): void{
    let i = this.myValue;
    for (let j = 0; j < this.employees.length; j++) {
      if (i == j){
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg = "Campo actualizado";
      }      
    }
    this.hideUpdate = true;
  }

  closeAlert(): void{
    this.msg = '';
  }
  
}


