import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdFoodPage } from './upd-food.page';

describe('UpdFoodPage', () => {
  let component: UpdFoodPage;
  let fixture: ComponentFixture<UpdFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdFoodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
