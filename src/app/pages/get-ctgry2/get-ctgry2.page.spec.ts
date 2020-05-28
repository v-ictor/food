import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetCtgry2Page } from './get-ctgry2.page';

describe('GetCtgry2Page', () => {
  let component: GetCtgry2Page;
  let fixture: ComponentFixture<GetCtgry2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCtgry2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetCtgry2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
