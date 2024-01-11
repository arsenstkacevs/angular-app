import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list', () => {
    fixture = TestBed.createComponent(ListComponent);
    fixture.componentInstance.list = ['a', 'b', 'c'];
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelectorAll('p');

    expect(element.length).toEqual(fixture.componentInstance.list.length);
  });
});
