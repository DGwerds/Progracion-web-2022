

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  title = 'Create User';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute, private _userService: UserService) {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      tipodocumento: ['', Validators.required],
      documento: ['', Validators.required],
      direccion: ['', Validators.required],
      desdireccion: ['', Validators.required],
      fecha: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.Edit();
  }

  addUser() {
    const USER: User = {
      nombre: this.userForm.get('nombre')?.value,
      apellido: this.userForm.get('apellido')?.value,
      tipodocumento: this.userForm.get('tipodocumento')?.value,
      documento: this.userForm.get('documento')?.value,
      direccion: this.userForm.get('direccion')?.value,
      desdireccion: this.userForm.get('desdireccion')?.value,
      fecha: this.userForm.get('fecha')?.value,
      email: this.userForm.get('email')?.value,
      telefono: this.userForm.get('telefono')?.value,
      usuario: this.userForm.get('usuario')?.value,
      password: this.userForm.get('password')?.value,
    }
    //Verificar existe el producto
    if (this.id !== null) {

      this._userService.editUser(this.id, USER).subscribe(data => {
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.userForm.reset();
      })
    } else {

      console.log(USER);
      this._userService.saveUser(USER).subscribe(data => {
        this.router.navigate(['/'])
      }, error => {
        console.log(error);
        this.userForm.reset();
      })
    }
  }

  Edit() {
    if (this.id !== null) {
      this.title = 'Edit User';
      this._userService.getAUser(this.id).subscribe(data => {
        this.userForm.setValue({
          name: data.name,
          category: data.category,
          price: data.price,
          status: data.status
        })
      })
    }
  }
}