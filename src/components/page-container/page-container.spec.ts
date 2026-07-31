import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContainer } from './page-container';

describe('PageContainer', () => {
  let component: PageContainer;
  let fixture: ComponentFixture<PageContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(PageContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
