import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprincipalComponent } from './homeprincipal.component';

describe('HomeprincipalComponent', () => {
  let component: HomeprincipalComponent;
  let fixture: ComponentFixture<HomeprincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeprincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
