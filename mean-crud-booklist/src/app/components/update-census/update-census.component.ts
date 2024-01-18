import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-update-census',
  templateUrl: './update-census.component.html',
  styleUrls: ['./update-census.component.css']
})
export class UpdatecCensusComponent implements OnInit {
  censusForm: FormGroup;
  censusId!: string;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private route: ActivatedRoute
  ) {
    this.censusForm = this.formBuilder.group({
      isbn: [''],
      title: [''],
      author: [''],
      description: [''],
      published_year: [''],
      publisher: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.censusId = params['id'];
      this.crudService.getCensusById(this.censusId).subscribe((data: any) => {
        this.censusForm.setValue({
          totalPeopleInHome: data.totalPeopleInHome,
          streetName: data.streetName,
          cityName: data.cityName,
          stateName: data.stateName,
          zipCode: data.zipCode,
          censusYear: data.censusYear,
          censusTakerName: data.censusTakerName
        });
      });
    });
  }

  onSubmit(): any {
    console.log('Submitting form with censusId:', this.censusId);
    console.log('Form data:', this.censusForm.value);
  
    this.crudService.updateCensus(this.censusId, this.censusForm.value).subscribe(
      () => {
        console.log('census updated successfully.');
        this.ngZone.run(() => this.router.navigateByUrl('/census-list'));
      },
      (err) => {
        console.log('Error updating census:', err);
      }
    );
  }
}
