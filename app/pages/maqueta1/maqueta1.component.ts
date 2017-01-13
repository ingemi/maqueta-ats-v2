import { Component } from '@angular/core';

@Component({
    selector: 'page-maqueta',
    templateUrl: 'app/pages/maqueta1/maqueta1.component.html',
})
export class Maqueta1Component  {
     name = 'Maqueta1';
     thumbnails: Array<{}>= [
		{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1}
	] 
     constructor(){

     }
}
