import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Tutorial } from '../../auth/models/tutorial.model';
import { TutorialService } from '../../auth/service/tutorial.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public contentHeader: object
  @Output() refreshList: EventEmitter<any> = new EventEmitter();


  parser = new DOMParser();
  tutorials?: Tutorial[];
  currentTutorial?: Tutorial;
  currentIndex = -1;
  title = '';
  message = '';


  constructor(private tutorialService: TutorialService) {

  }

  ngOnChanges(): void {
    this.currentTutorial = undefined;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.tutorials = data;
    });
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }


  updateTutorial(): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description
    };

    if (this.currentTutorial.id) {
      this.tutorialService.update(this.currentTutorial.id, data)
        .then(() => this.message = 'The tutorial was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  problemDelete(): void {
    if (this.currentTutorial.id) {
      this.tutorialService.delete(this.currentTutorial.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }


  ngOnInit(): void {
    this.retrieveTutorials();
    this.message = '';

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
          },
          {
            name: "View",
            isLink: false
          }
        ]
      }
    }
  }
}
