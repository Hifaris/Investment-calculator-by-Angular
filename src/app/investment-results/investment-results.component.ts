
import { Component, computed, inject, input, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
//  @Input() results?:{
//   year: number,
//   interest: number,
//   valueEndOfYear: number,
//   annualInvestment: number,
//   totalInterest: number,
//   totalAmountInvested: number
// }[]
// results = input<{
//     year: number,
//     interest: number,
//     valueEndOfYear: number,
//     annualInvestment: number,
//     totalInterest: number,
//     totalAmountInvested: number
//   }[]>()

  private investmentService = inject(InvestmentService)
 
  // get results(){
  //  return this.investmentService.resultsData
  // }

  results = this.investmentService.resultsData.asReadonly()
  // asReadonly can only read (read only signal)
}
