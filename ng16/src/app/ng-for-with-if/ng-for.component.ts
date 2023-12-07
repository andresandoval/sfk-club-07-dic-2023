import {Component, OnInit} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {User} from "../user";
import {HttpClient} from "@angular/common/http";

interface UserTable {
  header: string[],
  body: User[]
}

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent  {
  public $tableData: Observable<UserTable | null> = of({body: [], header: []})

  constructor(private readonly http: HttpClient) {
  }

  public loadData() {
    this.$tableData = this.http.get<User[]>('http://localhost:3000/user-list.json', {observe: "response"})
      .pipe(
        map(r => {
          const firstElement = (r.body)?.[0];
          return {
            header: Object.keys(firstElement || {}),
            body: r.body || []
          }
        })
      )
  }

}
