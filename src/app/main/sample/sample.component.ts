import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Tutorial } from '../../auth/models/tutorial.model';
import { TutorialService } from '../../auth/service/tutorial.service';
import { Person, DataService } from './data.service';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, last } from 'rxjs/operators';



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


  constructor(private tutorialService: TutorialService, private dataService: DataService, private storage: AngularFireStorage) { }

  saveTutorial(): void {
    this.tutorial.chapterContent = this.source;
    this.tutorialService.create(this.tutorial).then(() => {
      this.submitted = true;
    });
  }

  newTutorial(): void {
    this.source = '';
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

  source: string = ``;
  config: EditorComponent['init'] = {
    plugins: [
      'lists',
      'save',
      'image',
      'charmap',
      'codesample',
      'fullscreen',
      'export',
    ],
    toolbar:
      'undo redo | bold italic | fontsize | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent| charmap | image | save | fullscreen',
    file_picker_types: 'image',
    image_advtab: false,
    image_description: false,
    image_dimensions: false,
    block_unsupported_drop: true,
    placeholder: 'Once upon a time...',
    content_css: 'writer',
    content_style: 'img{max-width:100%;height:auto;}',
    images_reuse_filename: true,
    paste_data_images: false,
    height: '50vh',
    images_upload_handler: (blobInfo) => {
      const file = blobInfo.blob();
      const filePath = `${Date.now()}-${blobInfo.filename()}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      const promise = new Promise<string>((resolve, reject) => {
        task
          .snapshotChanges()
          .pipe(
            finalize(() =>
              ref
                .getDownloadURL()
                .pipe(last())
                .subscribe((url) => {
                  resolve(url);
                })
            )
          )
          .subscribe((_) => {
            // do nothing
          });
      });
      return promise;
    },
  };
  

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
