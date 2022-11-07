import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersTitleComponent } from './servers-title.component';

describe('ServersTitleComponent', () => {
  let component: ServersTitleComponent;
  let fixture: ComponentFixture<ServersTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServersTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
