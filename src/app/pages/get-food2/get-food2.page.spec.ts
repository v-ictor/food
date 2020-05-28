import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetFood2Page } from './get-food2.page';

describe('GetFood2Page', () => {
  let component: GetFood2Page;
  let fixture: ComponentFixture<GetFood2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFood2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetFood2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
