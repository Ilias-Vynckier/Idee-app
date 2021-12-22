import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectIdeeIdees } from 'src/app/state/idee.selector';

@Component({
  selector: 'idee-card',
  templateUrl: './idee-card.component.html',
  styleUrls: ['./idee-card.component.css'],
})
export class IdeeCardComponent implements OnInit {
  ngOnInit(): void {}
}
