export class User {
    _id?: number = 0;
    nombre: string;
    apellido: string;
    tipodocumento: string;
    documento: number;
    direccion: string;
    desdireccion: string;
    fecha: string;
    email: string;
    telefono: number;
    usuario: string;
    password: string;

    constructor(
        nombre:string, apellido:string, tipodocumento:string, documento:number, 
        direccion:string, desdireccion:string, fecha:string, email:string,
        telefono:number, usuario:string, password:string
        ){
            this.nombre = nombre;
            this.apellido = apellido;
            this.tipodocumento = tipodocumento;
            this.documento = documento;
            this.direccion = direccion;
            this.desdireccion = desdireccion;
            this.fecha = fecha;
            this.email = email;
            this.telefono = telefono;
            this.usuario = usuario;
            this.password = password;
    }
}
//
