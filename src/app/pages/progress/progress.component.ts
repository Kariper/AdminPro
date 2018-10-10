import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progress: number = 10;
  leyenda: string = 'Barra de Progreso';

  progress1: number = 50;
  leyenda1: string = 'Barra de Progreso 2';

  constructor() { }

  ngOnInit() {
  }

}
