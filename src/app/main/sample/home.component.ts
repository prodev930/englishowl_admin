import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core'
import { Tutorial } from '../../auth/models/tutorial.model';
import { User } from '../../auth/models/tutorial.model';
import { TutorialService } from '../../auth/service/tutorial.service';
import { UserService } from '../../auth/service/user';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() refreshList: EventEmitter<any> = new EventEmitter();

  user: User = {
    id: '',
    email: '',
    password: '',
  };
  message = '';

  public contentHeader: object
  tutorial: Tutorial = new Tutorial();
  submitted = false;
  users?: User[];


  constructor(private tutorialService: TutorialService, private userService: UserService) { }
  saveTutorial(): void {
    this.tutorialService.create(this.tutorial).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  ngOnChanges(): void {
    this.message = '';
    this.retrieveTutorials();
    this.user = { ...this.tutorial };
  }

  retrieveTutorials(): void {
    this.userService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.users = data;
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Tutorial();
  }


  modalOpenVC(): void {

    if (this.user.id) {
      this.tutorialService.delete(this.user.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.retrieveTutorials();
    this.contentHeader = {
      headerTitle: 'Admin',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Dashboard',
            isLink: true,
            link: '/'
          },
          {
            name: 'Home',
            isLink: false
          }
        ]
      }
    }
  }


}
