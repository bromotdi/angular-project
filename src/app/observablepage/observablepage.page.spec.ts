import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObservablepagePage } from './observablepage.page';

describe('ObservablepagePage', () => {
  let component: ObservablepagePage;
  let fixture: ComponentFixture<ObservablepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablepagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObservablepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
