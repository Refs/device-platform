import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'device-platform';

  ngOnInit() {
    $('#clickBtn').on('click', function(event) {
      console.log(event);
    });
  }

}
