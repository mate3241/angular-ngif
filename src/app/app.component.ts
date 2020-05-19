import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngIf-ngClass-ngStyle';
  length: number;
  textInput = '';
  editable = false;
  color: string;
  toggleEditable(){
    this.editable = !this.editable;
  }
  isLongerThan9(input: string){
    return input.length >= 10;
  }
  getColor(input: string){
    return input.length >= 14 ? this.color : 'white';
  }
}
/*Az egész eddigieket egy material kártyában jelenítsd meg és az inputoknak is adja material kinézetet
	
	
	
A kártyának legyen fejléce, amiben megadhatsz egy tetszőleges címet
	
	
	
A checkbox mellé tegyél egy fontawesome info ikont, aminek ha fölé viszed az egeret tooltipben megjelenik egy információ: “Csak akkor tölthető ki a mező ha be van pipálva” */
