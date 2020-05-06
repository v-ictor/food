import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsCtgryPage } from './ins-ctgry.page';

describe('InsCtgryPage', () => {
  let component: InsCtgryPage;
  let fixture: ComponentFixture<InsCtgryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsCtgryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsCtgryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
