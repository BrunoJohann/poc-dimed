import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesItemComponent } from '../detalhes-item.component';
import { DetalheItemModule } from '../detalhe-item.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

fdescribe('DetalhesItemComponent', () => {
  let component: DetalhesItemComponent;
  let fixture: ComponentFixture<DetalhesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheItemModule ],
      providers: [ NgbActiveModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
