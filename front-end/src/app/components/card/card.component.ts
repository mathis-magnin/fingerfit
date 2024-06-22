import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input() name: string = "";
  @Input() image: string = "";
  @Input() hasInput: boolean = false;
  @Input() input: number = 1;
  @Input() isSelected: boolean = false;

  @Output() selected: EventEmitter<void> = new EventEmitter();
  @Output() inputNumber: EventEmitter<number | undefined> = new EventEmitter();


  clicked(): void {
    this.selected.emit();
  }


  changeinput(str: string): void {
    this.inputNumber.emit((str == "") ? undefined : parseFloat(str));
  }

}
