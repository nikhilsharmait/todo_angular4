/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyTodoService } from './my-todo.service';

describe('MyTodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyTodoService]
    });
  });

  it('should ...', inject([MyTodoService], (service: MyTodoService) => {
    expect(service).toBeTruthy();
  }));
});
