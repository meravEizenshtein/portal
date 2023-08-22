import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-filters',
  templateUrl:'./filters.component.html' 
})
export class FiltersComponent implements OnInit {

  @Output() public showCategory = new EventEmitter<string>();

   categories: string[] | undefined;

   categoriesSubscription: Subscription | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.categoriesSubscription = this.apiService
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
