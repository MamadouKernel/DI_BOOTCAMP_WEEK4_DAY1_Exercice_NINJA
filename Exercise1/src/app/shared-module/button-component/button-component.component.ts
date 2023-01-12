import { Component} from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent  {

  
  clicked(){
    alert('the button is clicked.')
  }
  
}
