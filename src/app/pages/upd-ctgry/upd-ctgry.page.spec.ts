import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdCtgryPage } from './upd-ctgry.page';

describe('UpdCtgryPage', () => {
  let component: UpdCtgryPage;
  let fixture: ComponentFixture<UpdCtgryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdCtgryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdCtgryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
