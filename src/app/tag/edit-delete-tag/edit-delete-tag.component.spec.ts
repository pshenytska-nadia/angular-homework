import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteTagComponent } from './edit-delete-tag.component';

describe('EditDeleteTagComponent', () => {
  let component: EditDeleteTagComponent;
  let fixture: ComponentFixture<EditDeleteTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeleteTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDeleteTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
