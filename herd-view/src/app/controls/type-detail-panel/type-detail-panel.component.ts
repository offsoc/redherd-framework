import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Type } from '../../bin/model/type';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-type-detail-panel',
  templateUrl: './type-detail-panel.component.html',
  styleUrls: ['./type-detail-panel.component.css']
})
export class TypeDetailPanelComponent implements OnInit {
  type: Type;

  constructor(
    private route: ActivatedRoute,
    private typeService: TypeService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    let id : number = +this.route.snapshot.paramMap.get('id');

    this.typeService.getType(id)
      .subscribe(type => this.type = type);
  }

  save(): void {
    this.typeService.updateType(this.type)
      .subscribe(() => this.back());
  }

  back(): void {
    this.location.back();
  }
}
