import 'libraries/js-marker-clusterer/src/markerclusterer';

import { Component, OnInit } from '@angular/core';

import {TMarkerData} from "modules/appCommon/AppTypes";


@Component({
  selector: 'app-markers-route',
  templateUrl: './markers-route.component.html',
  styleUrls: ['./markers-route.component.scss']
})
export class MarkersRouteComponent implements OnInit {
  markers: TMarkerData[] = [];

  constructor() {}

  ngOnInit() {

  }

}
