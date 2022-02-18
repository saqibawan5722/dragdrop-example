import { Component } from '@angular/core';
import { CdkDragDrop , moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'athenticate';

  Animals=[
    "dogs",
    "camels",
    "egale",
    "hen"
  ];

  Animals2=[
    "goat",
    "cow",
    "horse",
    "donkey"
  ];

  onDrop(event : CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
       
      );
    }else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
     
  }
}
