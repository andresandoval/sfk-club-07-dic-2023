import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-large-component',
  templateUrl: './large-component.component.html',
  styleUrl: './large-component.component.scss'
})
export class LargeComponentComponent  implements OnInit{
  ngOnInit(): void {
    throw new Error("mock error")
  }



}
