import { Injectable } from '@nestjs/common';
import { User } from './user/user.interface';

@Injectable()
export class LoginService {

    //all users  
    async allUsers() {
        return await "All Users";
    }
    //user
    async idUser(id: number) {
        return await "User Id = "+id;
    }
    //crear user
    async crearUser(user: User){
        return await {"Mensaje": 'Usuario Ingresado', user: user};
    }
    //editar user
    async editUser(id: number, user: User){
        return await {"Mensaje": 'Datos Ingresados', id: id, user: user};
    }
    //eliminara user
    async elimUser(id: number){
        return await "Usuario "+id+ " Eliminado";
    }    
}
