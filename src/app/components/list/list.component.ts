import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Store } from '@ngrx/store';
import { State, getProducts } from './state';
import { ProductPageActions } from './state/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  @Input() list: string[] | undefined;
  products$: Observable<any>;

  constructor(private service: AppService, private store: Store<State>) {
    console.log('test');
  }

  ngOnInit() {
    this.products$ = this.store.select(getProducts);

    this.store.dispatch(ProductPageActions.loadProducts());

    this.store.dispatch(ProductPageActions.deleteProduct({ productId: 1 }));

    setTimeout(() => this.store.subscribe((val) => console.log(val)));
  }
}
