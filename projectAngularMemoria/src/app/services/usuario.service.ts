import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuarios: Usuario[] = [
    {usuario: "cerika", nombre: 'Erika', apellido: "Cabarcas", sexo: "femenino"},
    {usuario: "bdayanna", nombre: 'Dayanna', apellido: "Bechara", sexo: "femenino"},
    {usuario: "pmartin", nombre: 'Martin', apellido: "Paliza", sexo: "masculino"}

  ];

  constructor() { }

  getUsuario(){
    return this.listaUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listaUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listaUsuarios.unshift(usuario);
  }

}
