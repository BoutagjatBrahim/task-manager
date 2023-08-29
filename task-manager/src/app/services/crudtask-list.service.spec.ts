import { TestBed } from '@angular/core/testing';

import { CRUDTaskListService } from './crudtask-list.service';

describe('CRUDTaskListService', () => {
  let service: CRUDTaskListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDTaskListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
