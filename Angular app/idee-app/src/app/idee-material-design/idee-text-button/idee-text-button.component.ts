import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/data-services/data.service';
import { idee } from '../idee';


@Component({
  selector: 'idee-text-button',
  templateUrl: './idee-text-button.component.html',
  styleUrls: ['./idee-text-button.component.css']
})
export class IdeeTextButtonComponent implements OnInit {

  ideeAPIsub = new Subscription();

  @Output() ideeClick = new EventEmitter<idee>();
  constructor(private data: DataService) { }

  ngOnInit() {
    
  }

  ngOnDestroy() {

  }


  ideeFetch( ){
    // prevent browser reload on click.

    this.ideeAPIsub.add(
      this.data.changeMessage().subscribe()
    );
  }
}


