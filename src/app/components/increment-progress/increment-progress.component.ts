import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment-progress',
  templateUrl: './increment-progress.component.html',
  styles: []
})
export class IncrementProgressComponent implements OnInit {

  @Input() leyenda: string = 'Titulo';
  @Input() progress: number = 50;

  @Output() changeValues: EventEmitter <number> = new EventEmitter();

  @ViewChild('txtProgress') txtProgress:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onChange(newValue:number) {
    if(newValue>=100) {
      this.progress=100;
    } else if(newValue<=0) {
      this.progress=0;
    } else {
      this.progress=newValue;
    }
    this.changeValues.emit(this.progress);
    this.txtProgress.nativeElement.value=this.progress;
  }

  changeValue(value: number) {

    if (this.progress>=100 && value>0) {
      this.progress=100;
      return;
    }

    if(this.progress<=0 && value<0) {
      this.progress=0;
      return;
    }

    this.progress+=value;

    this.changeValues.emit(this.progress);
}

}
