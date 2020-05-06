import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetCtgryPage } from './get-ctgry.page';

describe('GetCtgryPage', () => {
  let component: GetCtgryPage;
  let fixture: ComponentFixture<GetCtgryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCtgryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetCtgryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
