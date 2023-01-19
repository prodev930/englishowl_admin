import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { User } from '../models/tutorial.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private dbPath = '/users';

    tutorialsRef: AngularFireList<User>;

    constructor(private db: AngularFireDatabase) {
        this.tutorialsRef = db.list(this.dbPath);
    }

    getAll(): AngularFireList<User> {
        return this.tutorialsRef;
    }

    create(tutorial: User): any {
        return this.tutorialsRef.push({ ...tutorial });
    }

    update(id: string, data: any): Promise<void> {
        return this.tutorialsRef.update(id, data);
    }

    delete(id: string): Promise<void> {
        return this.tutorialsRef.remove(id);
    }
}
