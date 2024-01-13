import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs';
import { UpperCasePipe } from './pipes/upper-case.pipe';
import { ListComponent } from './components/list/list.component';

interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, UpperCasePipe, ListComponent],
})
export class AppComponent {
  title = 'angular-app';
  productsUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {
    this.http
      .get<Product[]>(this.productsUrl)
      .pipe(
        switchMap(() => this.http.get(this.productsUrl + '/' + 2)),
        map((val) => console.log(val))
      )
      .subscribe();
  }
}
