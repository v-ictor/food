import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetsCtgryPage } from './gets-ctgry.page';

describe('GetsCtgryPage', () => {
  let component: GetsCtgryPage;
  let fixture: ComponentFixture<GetsCtgryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetsCtgryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetsCtgryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
