import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
   /*  $("table td").hover(
      function () {
          $("td", $(this).closest("tr")).addClass("hover_row");
      },
      function () {
          $("td", $(this).closest("tr")).removeClass("hover_row");
      }
  );
 
  $('table').find('tr:even').css({'background-color': '#f5f5f5' })
  .end().find('tr:odd').css({ 'background-color': '#add8e6' });  */
 }
  title = 'BiblosFront';
}
