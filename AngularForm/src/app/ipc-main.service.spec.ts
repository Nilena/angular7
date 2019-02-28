import { TestBed } from '@angular/core/testing';

import { IpcMainService } from './ipc-main.service';

describe('IpcMainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpcMainService = TestBed.get(IpcMainService);
    expect(service).toBeTruthy();
  });
});
