import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ptap',
  templateUrl: './ptap.component.html',
  styleUrls: ['./ptap.component.css']
})
export class PtapComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  public ngOnInit(): void {   
    this._router.navigate(['ptap', 'home']);
  }
}
