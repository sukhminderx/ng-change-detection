import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  child = {
    name: 'old',
  };

  changeChild() {
    this.child.name = 'middle';
   // this.child = {
   //   name: 'middle'
   // }
  }

  receiveFromChild (){
    // first call changeChild in mutated form to check whether this causes re render in child (ngOnChanges)
    // after changeChild, call receiveFromChild
    // ngOnchanges is not called because reference hasnt changd
    // but CD of child is called and so it takes new value 
    // if CD strategy was default, then the mutated value would be reflected without calling receiveFromChild as
    // child CD is called by mutations too, the only trick is that
    // ngOnchanges still dont get called bcz reference hasnt changed
    // so CD running does not necessary mean ngOnChanges will run, they are two separate things
  }
}
