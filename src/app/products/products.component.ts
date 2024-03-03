import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit{

  products:any;

  constructor( private api:ApiService){ }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.api.get().subscribe((result)=>{
      this.products = result ;
      // console.log(this.products);
      
    })
  }

  deleteData(id:number){
      this.api.delete(id).subscribe(()=>{
        this.getAll();
      })
  }

  

}
