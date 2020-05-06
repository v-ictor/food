import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetFoodPage } from './get-food.page';

describe('GetFoodPage', () => {
  let component: GetFoodPage;
  let fixture: ComponentFixture<GetFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFoodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
