import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Tutorial } from '../../auth/models/tutorial.model';
import { TutorialService } from '../../auth/service/tutorial.service';
import { Person, DataService } from './data.service';



@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SampleComponent implements OnInit {
  public contentHeader: object

  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */
  // constructor(private _coreTranslationService: CoreTranslationService) {
  //   this._coreTranslationService.translate(en, fr, de, pt)
  // }
  tutorial: Tutorial = new Tutorial();
  submitted = false;

  public selectBasic: Person[] = [];
  public selectQuiz: Person[] = [];
  public selectBasicLoading = false;


  /**
   * Constructor
   *
   * @param {DataService} dataService
   * @param {NgbModal} modalService
   */


  constructor(private tutorialService: TutorialService, private dataService: DataService) { }

  saveTutorial(): void {
    this.tutorialService.create(this.tutorial).then(() => {
      this.submitted = true;
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Tutorial();
  }


  // select basic
  private selectBasicMethod() {
    this.selectBasicLoading = true;
    this.dataService.getPeople().subscribe(x => {
      this.selectBasic = x;
      this.selectBasicLoading = false;
    });
    this.dataService.getQuiz().subscribe(y => {
      this.selectQuiz = y;
      this.selectBasicLoading = false;
    });
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.selectBasicMethod();
    this.contentHeader = {
      headerTitle: 'Admin',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Test',
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
