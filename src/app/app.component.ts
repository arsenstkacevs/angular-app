import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UpperCasePipe } from './pipes/upper-case.pipe';
import { ListComponent } from './components/list/list.component';
import { AppService } from './services/app.service';

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
export class AppComponent implements OnInit {
  title = 'angular-app';
  productsUrl = 'https://fakestoreapi.com/products';

  constructor(private service: AppService) {}

  ngOnInit() {}
}
