import { Component } from '@angular/core';

@Component({
    selector: 'page-maqueta2',
    templateUrl: 'app/pages/maqueta2/maqueta2.component.html',
})
export class Maqueta2Component  {
     name = 'Maqueta2'; 
     profiles: Array<{}>= [
		{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1}
	] 
}
