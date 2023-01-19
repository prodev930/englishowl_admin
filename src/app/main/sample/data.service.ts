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
      name: 'Chapter 1',
    },
    {
      id: '2',
      isActive: false,
      name: 'Chapter 2',
    },
    {
      id: '3',
      isActive: false,
      name: 'Chapter 3',
    },
    {
      id: '4',
      isActive: false,
      name: 'Chapter 4',
    },
    {
      id: '5',
      isActive: false,
      name: 'Chapter 5',
    },
    {
      id: '6',
      isActive: false,
      name: 'Chapter 6',
    },
    {
      id: '7',
      isActive: false,
      name: 'Chapter 7',
    },
    {
      id: '8',
      isActive: false,
      name: 'Chapter 8',
    },
    {
      id: '9',
      isActive: false,
      name: 'Chapter 9',
    },
    {
      id: '10',
      isActive: false,
      name: 'Chapter 10',
    },
    {
      id: '11',
      isActive: false,
      name: 'Chapter 11',
    },
    {
      id: '12',
      isActive: false,
      name: 'Chapter 12',
    },
    {
      id: '13',
      isActive: false,
      name: 'Chapter 13',
    },
    {
      id: '14',
      isActive: false,
      name: 'Chapter 14',
    },
    {
      id: '15',
      isActive: false,
      name: 'Chapter 15',
    },
    {
      id: '16',
      isActive: false,
      name: 'Chapter 16',
    },
    {
      id: '17',
      isActive: false,
      name: 'Chapter 17',
    },
    {
      id: '18',
      isActive: false,
      name: 'Chapter 18',
    },
    {
      id: '19',
      isActive: false,
      name: 'Chapter 19',
    },
    {
      id: '20',
      isActive: false,
      name: 'Chapter 20',
    },
    {
      id: '21',
      isActive: false,
      name: 'Chapter 21',
    },
    {
      id: '22',
      isActive: false,
      name: 'Chapter 22',
    },
    {
      id: '23',
      isActive: false,
      name: 'Chapter 23',
    },
    {
      id: '24',
      isActive: false,
      name: 'Chapter 24',
    },
    {
      id: '25',
      isActive: false,
      name: 'Chapter 25',
    },
    {
      id: '26',
      isActive: false,
      name: 'Chapter 26',
    },
    {
      id: '27',
      isActive: false,
      name: 'Chapter 27',
    },
    {
      id: '28',
      isActive: false,
      name: 'Chapter 28',
    },
    {
      id: '29',
      isActive: false,
      name: 'Chapter 29',
    },
    {
      id: '30',
      isActive: false,
      name: 'Chapter 30',
    },
    {
      id: '31',
      isActive: false,
      name: 'Chapter 31',
    },
    {
      id: '32',
      isActive: false,
      name: 'Chapter 32',
    },
    {
      id: '33',
      isActive: false,
      name: 'Chapter 33',
    },
    {
      id: '34',
      isActive: false,
      name: 'Chapter 34',
    },
    {
      id: '35',
      isActive: false,
      name: 'Chapter 35',
    },
    {
      id: '36',
      isActive: false,
      name: 'Chapter 36',
    },
    
  ];
}

function getQuiz(){
  return [
    {
      id: '1',
      isActive: true,
      name: 'Quiz 1',
    },
    {
      id: '2',
      isActive: false,
      name: 'Quiz 2',
    },
    {
      id: '3',
      isActive: false,
      name: 'Quiz 3',
    },
    {
      id: '4',
      isActive: false,
      name: 'Quiz 4',
    },
    {
      id: '5',
      isActive: false,
      name: 'Quiz 5',
    },
    {
      id: '6',
      isActive: false,
      name: 'Quiz 6',
    },
    {
      id: '7',
      isActive: false,
      name: 'Quiz 7',
    },
    {
      id: '8',
      isActive: false,
      name: 'Quiz 8',
    },
    {
      id: '9',
      isActive: false,
      name: 'Quiz 9',
    },
    {
      id: '10',
      isActive: false,
      name: 'Quiz 10',
    },
    {
      id: '11',
      isActive: false,
      name: 'Quiz 11',
    },
    {
      id: '12',
      isActive: false,
      name: 'Quiz 12',
    },
    {
      id: '13',
      isActive: false,
      name: 'Quiz 13',
    },
    {
      id: '14',
      isActive: false,
      name: 'Quiz 14',
    },
    {
      id: '15',
      isActive: false,
      name: 'Quiz 15',
    },
    {
      id: '16',
      isActive: false,
      name: 'Quiz 16',
    },
    {
      id: '17',
      isActive: false,
      name: 'Quiz 17',
    },
    {
      id: '18',
      isActive: false,
      name: 'Quiz 18',
    },
    {
      id: '19',
      isActive: false,
      name: 'Quiz 19',
    },
    {
      id: '20',
      isActive: false,
      name: 'Quiz 20',
    },
    {
      id: '21',
      isActive: false,
      name: 'Quiz 21',
    },
    {
      id: '22',
      isActive: false,
      name: 'Quiz 22',
    },
    {
      id: '23',
      isActive: false,
      name: 'Quiz 23',
    },
    {
      id: '24',
      isActive: false,
      name: 'Quiz 24',
    },
    {
      id: '25',
      isActive: false,
      name: 'Quiz 25',
    },
    {
      id: '26',
      isActive: false,
      name: 'Quiz 26',
    },
    {
      id: '27',
      isActive: false,
      name: 'Quiz 27',
    },
    {
      id: '28',
      isActive: false,
      name: 'Quiz 28',
    },
    {
      id: '29',
      isActive: false,
      name: 'Quiz 29',
    },
    {
      id: '30',
      isActive: false,
      name: 'Quiz 30',
    },
    {
      id: '31',
      isActive: false,
      name: 'Quiz 31',
    },
    {
      id: '32',
      isActive: false,
      name: 'Quiz 32',
    },
    {
      id: '33',
      isActive: false,
      name: 'Quiz 33',
    },
    {
      id: '34',
      isActive: false,
      name: 'Quiz 34',
    },
    {
      id: '35',
      isActive: false,
      name: 'Quiz 35',
    },
    {
      id: '36',
      isActive: false,
      name: 'Quiz 36',
    },
    
  ];
}