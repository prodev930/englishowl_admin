import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Tutorial } from '../../auth/models/tutorial.model';
import { TutorialService } from '../../auth/service/tutorial.service';
import { map } from 'rxjs/operators';
// import { AuthenticationService } from '../../auth/service/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public contentHeader: object

  parser = new DOMParser();
  tutorials?: Tutorial[];
  currentTutorial?: Tutorial;
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialService) {

  }

  refreshList(): void {
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
        // console.log("dsafadsf",data);
        // if(data.length > 0) {
        //   for (var i = 0; i<data.length; i++) {
        //     console.log(typeof data[i].chapterContent, data[i].chapterContent)
        //     this.parser.parseFromString(data[i].chapterContent, "text/html");
        //   }
        // }
        this.tutorials = data;
    });
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  ngOnInit(): void {
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
