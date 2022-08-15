import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterfacepagePage } from './interfacepage.page';

describe('InterfacepagePage', () => {
  let component: InterfacepagePage;
  let fixture: ComponentFixture<InterfacepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfacepagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterfacepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
