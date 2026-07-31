import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNav } from './site-nav';

describe('SiteNav', () => {
  let component: SiteNav;
  let fixture: ComponentFixture<SiteNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteNav],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
