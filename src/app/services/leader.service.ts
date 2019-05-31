import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {


  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS;
  }

  getLeader(id: number): Leader {
    return LEADERS.find(leader => leader.id === id);
  }

  getFeaturedLeader(): Leader {
    return LEADERS.find(leader => leader.featured);
  }

}