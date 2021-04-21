import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Step} from '../interfaces/step';

@Injectable({
  providedIn: 'root',
})

export class StepsService {

  constructor(private http: HttpClient) {
  }


  getData() {
    return this.http.get<any[]>('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge')
      .pipe(
        map(steps => {
          steps = steps.map(data => {
            return new Step().deserialize(data);
          });
          // steps = steps.map(data => new Step().deserialize(data));

          // sort steps by number
          steps.sort((a, b) => {
            if (a.stepNumber < b.stepNumber) {
              return -1;
            }
            if (a.stepNumber > b.stepNumber) {
              return 1;
            }
            return 0;
          });

          return steps;
        })
      );
  }


}
