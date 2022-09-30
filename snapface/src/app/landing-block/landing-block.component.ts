import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-block',
  templateUrl: './landing-block.component.html',
  styleUrls: ['./landing-block.component.scss']
})
export class LandingBlockComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}
  
  onContinue(): void {
    this.router.navigateByUrl("facesnaps");
  }

}
