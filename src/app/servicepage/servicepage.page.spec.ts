import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicepagePage } from './servicepage.page';

describe('ServicepagePage', () => {
  let component: ServicepagePage;
  let fixture: ComponentFixture<ServicepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicepagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
