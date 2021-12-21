import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data-services/data.service';


@Component({
  selector: 'new-idee',
  templateUrl: './new-idee.component.html',
  styleUrls: ['./new-idee.component.css']
})
export class NewIdeeComponent implements OnDestroy {
  newForm: FormGroup;
  bookApiSubscription = new Subscription();

  constructor(private form: FormBuilder, private ideeApi: DataService) {
    this.newForm = this.form.group({
      idee: ['', [Validators.required]],
    });
  }

  ngOnDestroy(): void {
    this.bookApiSubscription.unsubscribe();
  }

  create(): void {
    if (this.newForm.invalid) {
      return;
    }

    const test=JSON.stringify(this.newForm.value)

    this.bookApiSubscription.add(
      this.ideeApi.create(this.newForm.value).subscribe()
    );
  }
}
