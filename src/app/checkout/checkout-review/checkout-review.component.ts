import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss']
})
export class CheckoutReviewComponent  implements OnInit{
  @Input() appStepper?: CdkStepper;
  @Input() checkoutForm?: FormGroup;


  constructor(private basketService: BasketService, private toastr: ToastrService,private router: Router) {}
  ngOnInit(): void { console.log(this.checkoutForm?.get("basket"))
}

  /*createPaymentIntent() {
    this.basketService.createPaymentIntent().subscribe({
      next: () => {
        this.appStepper?.next();
      },
      error: error => this.toastr.error(error.message)
    })
  }*/
 success(){

this.router.navigate(['checkout/success']);
 }
 submitOrder(){
  
 }
}
