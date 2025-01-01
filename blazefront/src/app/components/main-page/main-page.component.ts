import { Component } from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {RequestService} from '../../services/request.service';
import {Card} from '../../models/new_card.model';
import {PaymentInformation} from '../../models/payment_info.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  cards: any[] | undefined;
  cardCreationForm: FormGroup;
  transferMoneyForm: FormGroup;

  constructor (private databaseService: DatabaseService,
               private formBuilder: FormBuilder,
               private requestService: RequestService,
               private datePipe: DatePipe) {
    this.cardCreationForm = this.formBuilder.group({
      cardNumber: new FormControl(),
      accountNumber: new FormControl(),
      cardType: new FormControl(),
      cvv: new FormControl()
    });
    this.transferMoneyForm = this.formBuilder.group({
      senderCardNumber: new FormControl(),
      senderAccountNumber: new FormControl(),
      amount: new FormControl(),
      receiverCardNumber: new FormControl(),
      receiverAccountNumber: new FormControl(),
      receiverBank: new FormControl(),
      cvv: new FormControl(),
    });
  }

  ngOnInit() {
    // @ts-ignore
    this.databaseService.getUserCards()?.subscribe((data: any[]) => {
      this.cards = data;
    })
  }

  createCard() {
    let expDate: Date = new Date();
    expDate.setFullYear(expDate.getFullYear() + 10);
    let card: Card = new Card(
      this.cardCreationForm.get('cardNumber')?.value,
      this.cardCreationForm.get('accountNumber')?.value,
      // @ts-ignore
      this.datePipe.transform(expDate, 'yyyy-MM-dd').toString(),
      this.cardCreationForm.get('cardType')?.value,
      this.cardCreationForm.get('cvv')?.value,
      "0"
    );
    this.requestService.createNewCard(card).subscribe((data: any) => {
      alert("Карта создана успешно");
    }, error => alert("Произошла непредвиденная ошибка" + error));
  }

  sendMoney() {
    let paymentInfo: PaymentInformation = new PaymentInformation(
      this.transferMoneyForm.get('senderCardNumber')?.value,
      this.transferMoneyForm.get('senderAccountNumber')?.value,
      this.transferMoneyForm.get('amount')?.value,
      this.transferMoneyForm.get('receiverCardNumber')?.value,
      this.transferMoneyForm.get('receiverAccountNumber')?.value,
      this.transferMoneyForm.get('receiverBank')?.value,
      this.transferMoneyForm.get('cvv')?.value,
    );
    this.requestService.completePayment(paymentInfo).subscribe((data: any) => {
      if (data.status == '200') {
        alert("Перевод прошёл успешно")
      }
      else if (data.status == '202') {
        alert("Перевод в обработке в другом банке.")
      }
      else {
        alert("Произошла ошибка при переводе. Попробуйте перевести деньги позже");
        console.log(data.description);
      }
    }, error => {
      alert("Произошла непредвиденная ошибка. Попробуйте позже");
      console.log(error);
    });
  }
}
