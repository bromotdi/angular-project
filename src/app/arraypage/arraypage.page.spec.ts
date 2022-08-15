import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArraypagePage } from './arraypage.page';

describe('ArraypagePage', () => {
  let component: ArraypagePage;
  let fixture: ComponentFixture<ArraypagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraypagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArraypagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
