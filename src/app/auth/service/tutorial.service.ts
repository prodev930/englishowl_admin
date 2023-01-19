import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Tutorial } from '../models/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private dbPath = '/tutorials';

  tutorialsRef: AngularFireList<Tutorial>;

  constructor(private db: AngularFireDatabase) {
    this.tutorialsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Tutorial> {
    return this.tutorialsRef;
  }

  create(tutorial: Tutorial): any {
    return this.tutorialsRef.push({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.tutorialsRef.update(id, data);
  }

  delete(id: string): Promise<void> {
    return this.tutorialsRef.remove(id);
  }
}
