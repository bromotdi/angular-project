import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbstractClassPage } from './abstract-class.page';

describe('AbstractClassPage', () => {
  let component: AbstractClassPage;
  let fixture: ComponentFixture<AbstractClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractClassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbstractClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
