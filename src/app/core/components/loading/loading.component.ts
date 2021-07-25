import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent implements OnInit {

  constructor(public _loadingService: LoadingService) { }

  ngOnInit(): void {
  }

}
