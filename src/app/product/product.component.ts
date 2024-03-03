import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  formData: any;
  id: any;
  data: any;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.bind();

    if (this.id != null) {
      this.api.getbyid(this.id).subscribe((result) => {
        this.data = result;
        this.bind();
      });
    } else {
      this.bind();
    }
  }

  bind() {
    this.formData = new FormGroup({
      id: new FormControl(this.data != null ? this.data.id : '0'),
      name: new FormControl(this.data != null ? this.data.name : ''),
      price: new FormControl(this.data != null ? this.data.price : ''),
    });
  }

  saveData(data:any) {
    // console.log(data);
    if(data.id != 0){
      this.api.put(data.id,data).subscribe(()=>{
      this.router.navigate(['/products']);

      })
    }
    else
    {
    this.api.post(data).subscribe((result) => {
      this.router.navigate(['/products']);
    });
  }
  }
}
