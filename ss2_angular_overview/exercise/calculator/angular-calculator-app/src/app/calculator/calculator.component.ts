import {Component, OnInit} from '@angular/core';
import {Validators} from "@angular/forms";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstOperand = '';
  secondOperand = '';
  result = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  calculator(operator:string){
    if(operator === '+'){
      this.result = String(parseFloat(this.firstOperand) + parseFloat(this.secondOperand));
    }else if(operator === '-'){
      this.result = String(parseFloat(this.firstOperand) - parseFloat(this.secondOperand));
    }else if(operator === '*'){
      this.result = String(parseFloat(this.firstOperand) * parseFloat(this.secondOperand));
    }else if(operator === '/'){
      // @ts-ignore
      if (this.secondOperand == 0) {
        this.result = "Not enter number 0";
      } else {
        this.result = String(parseFloat(this.firstOperand) / parseFloat(this.secondOperand));
      }
    }
  }


}
