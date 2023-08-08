import { Component, OnInit } from '@angular/core';
import { TermsConditionComponent } from '../terms-condition/terms-condition.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
policies(){
  this.route.navigate(['privacy'])
}

terms_Condition(){
 this.route.navigate(['terms-condition'])
}
}
