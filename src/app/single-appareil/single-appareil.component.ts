import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name: string;
  status: string;
  constructor(private appareilService: AppareilService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; // 1, 2, 3
    // le + "cast" le string  ['id'] en nombre
    this.name = this.appareilService.getAppareilById(+id).name;
    this.status = this.appareilService.getAppareilById(+id).status;
  }
}
