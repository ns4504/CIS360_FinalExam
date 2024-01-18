import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-census-list',
  templateUrl: './census-list.component.html',
  styleUrls: ['./census-list.component.css']
})
export class CensusListComponent implements OnInit {

  Census:any = [];
 
  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.fetchCensus();
  }

  onDelete(id: any): any {
    this.crudService.DeleteCensus(id)
    .subscribe(res => {
    console.log(res)
    })
    location.reload();
  }     
  
  onUpdate(id: any): void {
    this.router.navigate(['/update-census', id]);
  }
  

  private fetchCensus(): void {
    this.crudService.GetCensus().subscribe(res => {
      console.log(res);
      this.Census = res;
    });
  }
}
