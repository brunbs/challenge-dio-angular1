import { Injectable } from "@angular/core";
import { User } from "./model/user";


@Injectable({
    providedIn: "root"
})
export class UserService {
    retrieveAll(): User[] {
        return USERS;
    }

    retrieveById(id: number): User {
        return USERS.find((userIterator: User) => userIterator.id === id);
    }

    save(user: User): void {
        if(user.id) {
            const index = USERS.findIndex((userIterator: User) => userIterator.id === user.id);
            USERS[index] = user;
        } else {
            let newId = USERS[USERS.length - 1].id + 1;
            user.id = newId;
            USERS.push(user);
        }
        console.log(USERS);
    }
}

var USERS: User[] = [
    { id: 1, name: 'Primeiro Usuario', email: 'primeiro@email.com', contact: 'usuario@email.com', addedOn: '11 de Junho de 2022', avatar: 'https://thumbs.dreamstime.com/b/avatar-do-homem-tot%C3%B3-104871313.jpg' },
    { id: 2, name: 'Segundo Usuario', email: 'segundo@email.com', contact: 'segusuario@email.com', addedOn: '10 de Junho de 2022', avatar: 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI=' },
    { id: 3, name: 'Terceiro Usuario', email: 'terceiro@email.com', contact: 'ter_user@email.com', addedOn: '09 de Junho de 2022', avatar: 'https://www.prints-online.com/p/164/silhouette-portrait-man-evening-dress-14130460.jpg' },
    { id: 4, name: 'Quarto Usuario', email: 'quarto@email.com', contact: '', addedOn: '01 de Maio de 2022', avatar: 'https://i.etsystatic.com/11999919/r/il/23d689/1803154071/il_570xN.1803154071_s94o.jpg' }
];
