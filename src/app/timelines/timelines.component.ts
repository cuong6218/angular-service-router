import { DateUtilService } from './../date-util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  output='';
  constructor(private dateUtil: DateUtilService) { }

  ngOnInit(): void {
  }
  onChange(event)
  {
    let value = event.target.value;
    this.output = this.dateUtil.getDiffToNow(value);
  }
}
