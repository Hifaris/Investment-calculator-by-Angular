import { Component,signal } from '@angular/core';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<Investment>();

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService){}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment:+this.enteredInitialInvestment(),
      duration:+this.enteredDuration(),
      expectedReturn:+this.enteredExpectedReturn(),
      annualInvestment:+this.enteredAnnualInvestment(),
  
   })
   this.enteredInitialInvestment.set("0")
   this.enteredAnnualInvestment.set("0")
  //  reset the value to initial value
  }
}
