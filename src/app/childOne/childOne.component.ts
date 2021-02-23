import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './childOne.component.html',
  styleUrls: ['./childOne.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildOneComponent {
  @Input() child;
  @Output() emit = new EventEmitter();
  self = {
    name: 'old self',
  };

  ngOnChanges(change) {
    console.log(change);
  }

  changeSelf() {
    this.self.name = 'middle self';
  }
}
