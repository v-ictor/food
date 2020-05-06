import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetsFoodPage } from './gets-food.page';

describe('GetsFoodPage', () => {
  let component: GetsFoodPage;
  let fixture: ComponentFixture<GetsFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetsFoodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetsFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
