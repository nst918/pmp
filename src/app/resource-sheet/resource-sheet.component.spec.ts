import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSheetComponent } from './resource-sheet.component';

describe('ResourceSheetComponent', () => {
  let component: ResourceSheetComponent;
  let fixture: ComponentFixture<ResourceSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResourceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
