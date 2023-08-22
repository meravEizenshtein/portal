import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filters',
  templateUrl:'./filters.component.html' 
})
export class FiltersComponent implements OnInit {

  @Output() public showCategory = new EventEmitter<string>();

   categories: string[] | undefined;

   categoriesSubscription: Subscription | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.categoriesSubscription = this.dataService
      .getAllCategories()
      .subscribe((response: Array<string>) => {
        this.categories = response;
      });
  }

   onShowCategory (category:string) :void{
    this.showCategory.next(category);
   }
   ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }

}
