import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

export interface Person {
  id: string;
  isActive: boolean;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _gitHubAccountsCache = new Map<string, []>();

  constructor(private http: HttpClient) {}

  getGithubAccounts(term: string = null) {
    if (this._gitHubAccountsCache.has(term)) {
      return of(this._gitHubAccountsCache.get(term));
    }

    if (term) {
      return this.http.get<any>(`https://api.github.com/search/users?q=${term}`).pipe(
        map(rsp => rsp.items),
        tap(data => this._gitHubAccountsCache.set(term, data))
      );
    } else {
      return of([]);
    }
  }

  

  getPeople(term: string = null): Observable<Person[]> {
    let items = getChapter();
    if (term) {
      items = items.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(50));
  }
  getQuiz(term: string = null): Observable<Person[]> {
    let quizs = getQuiz();
    if (term) {
      quizs = quizs.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(quizs).pipe(delay(50));
  }

}

function getChapter() {
  return [
    {
      id: '1',
      isActive: true,
      name: 'Chapter1',
    },
    {
      id: '2',
      isActive: false,
      name: 'Chapter2',
    },
    {
      id: '3',
      isActive: false,
      name: 'Chapter3',
    },
    {
      id: '4',
      isActive: false,
      name: 'Chapter4',
    },
    {
      id: '5',
      isActive: false,
      name: 'Chapter5',
    },
    {
      id: '6',
      isActive: false,
      name: 'Chapter6',
    },
    {
      id: '7',
      isActive: false,
      name: 'Chapter7',
    },
    {
      id: '8',
      isActive: false,
      name: 'Chapter8',
    },
    {
      id: '9',
      isActive: false,
      name: 'Chapter9',
    },
    {
      id: '10',
      isActive: false,
      name: 'Chapter10',
    },
    {
      id: '11',
      isActive: false,
      name: 'Chapter11',
    },
    {
      id: '12',
      isActive: false,
      name: 'Chapter12',
    },
    {
      id: '13',
      isActive: false,
      name: 'Chapter13',
    },
    {
      id: '14',
      isActive: false,
      name: 'Chapter14',
    },
    {
      id: '15',
      isActive: false,
      name: 'Chapter15',
    },
    {
      id: '16',
      isActive: false,
      name: 'Chapter16',
    },
    {
      id: '17',
      isActive: false,
      name: 'Chapter17',
    },
    {
      id: '18',
      isActive: false,
      name: 'Chapter18',
    },
    {
      id: '19',
      isActive: false,
      name: 'Chapter19',
    },
    {
      id: '20',
      isActive: false,
      name: 'Chapter20',
    },
    {
      id: '21',
      isActive: false,
      name: 'Chapter21',
    },
    {
      id: '22',
      isActive: false,
      name: 'Chapter22',
    },
    {
      id: '23',
      isActive: false,
      name: 'Chapter23',
    },
    {
      id: '24',
      isActive: false,
      name: 'Chapter24',
    },
    {
      id: '25',
      isActive: false,
      name: 'Chapter25',
    },
    {
      id: '26',
      isActive: false,
      name: 'Chapter26',
    },
    {
      id: '27',
      isActive: false,
      name: 'Chapter27',
    },
    {
      id: '28',
      isActive: false,
      name: 'Chapter28',
    },
    {
      id: '29',
      isActive: false,
      name: 'Chapter29',
    },
    {
      id: '30',
      isActive: false,
      name: 'Chapter30',
    },
    {
      id: '31',
      isActive: false,
      name: 'Chapter31',
    },
    {
      id: '32',
      isActive: false,
      name: 'Chapter32',
    },
    {
      id: '33',
      isActive: false,
      name: 'Chapter33',
    },
    {
      id: '34',
      isActive: false,
      name: 'Chapter34',
    },
    {
      id: '35',
      isActive: false,
      name: 'Chapter35',
    },
    {
      id: '36',
      isActive: false,
      name: 'Chapter36',
    },
    
  ];
}

function getQuiz(){
  return [
    {
      id: '1',
      isActive: true,
      name: 'Quiz1',
    },
    {
      id: '2',
      isActive: false,
      name: 'Quiz2',
    },
    {
      id: '3',
      isActive: false,
      name: 'Quiz3',
    },
    {
      id: '4',
      isActive: false,
      name: 'Quiz4',
    },
    {
      id: '5',
      isActive: false,
      name: 'Quiz5',
    },
    {
      id: '6',
      isActive: false,
      name: 'Quiz6',
    },
    {
      id: '7',
      isActive: false,
      name: 'Quiz7',
    },
    {
      id: '8',
      isActive: false,
      name: 'Quiz8',
    },
    {
      id: '9',
      isActive: false,
      name: 'Quiz9',
    },
    {
      id: '10',
      isActive: false,
      name: 'Quiz10',
    },
    {
      id: '11',
      isActive: false,
      name: 'Quiz11',
    },
    {
      id: '12',
      isActive: false,
      name: 'Quiz12',
    },
    {
      id: '13',
      isActive: false,
      name: 'Quiz13',
    },
    {
      id: '14',
      isActive: false,
      name: 'Quiz14',
    },
    {
      id: '15',
      isActive: false,
      name: 'Quiz15',
    },
    {
      id: '16',
      isActive: false,
      name: 'Quiz16',
    },
    {
      id: '17',
      isActive: false,
      name: 'Quiz17',
    },
    {
      id: '18',
      isActive: false,
      name: 'Quiz18',
    },
    {
      id: '19',
      isActive: false,
      name: 'Quiz19',
    },
    {
      id: '20',
      isActive: false,
      name: 'Quiz20',
    },
    {
      id: '21',
      isActive: false,
      name: 'Quiz21',
    },
    {
      id: '22',
      isActive: false,
      name: 'Quiz22',
    },
    {
      id: '23',
      isActive: false,
      name: 'Quiz23',
    },
    {
      id: '24',
      isActive: false,
      name: 'Quiz24',
    },
    {
      id: '25',
      isActive: false,
      name: 'Quiz25',
    },
    {
      id: '26',
      isActive: false,
      name: 'Quiz26',
    },
    {
      id: '27',
      isActive: false,
      name: 'Quiz27',
    },
    {
      id: '28',
      isActive: false,
      name: 'Quiz28',
    },
    {
      id: '29',
      isActive: false,
      name: 'Quiz29',
    },
    {
      id: '30',
      isActive: false,
      name: 'Quiz30',
    },
    {
      id: '31',
      isActive: false,
      name: 'Quiz31',
    },
    {
      id: '32',
      isActive: false,
      name: 'Quiz32',
    },
    {
      id: '33',
      isActive: false,
      name: 'Quiz33',
    },
    {
      id: '34',
      isActive: false,
      name: 'Quiz34',
    },
    {
      id: '35',
      isActive: false,
      name: 'Quiz35',
    },
    {
      id: '36',
      isActive: false,
      name: 'Quiz36',
    },
    
  ];
}