import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsFoodPage } from './ins-food.page';

describe('InsFoodPage', () => {
  let component: InsFoodPage;
  let fixture: ComponentFixture<InsFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsFoodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
