import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ac-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnChanges {
  @Input() items: Array<any>;
  @Input() bindLabel: string;
  @Input() bindValue: string;
  @Input() selected: string;

  @Output() selectionChange = new EventEmitter<any>();

  select = new FormControl<string>('');

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selected) {
      this.select.setValue(changes.selected.currentValue);
    }
  }
}
