import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Card} from '../models/new_card.model';
import {CardCreationSuccess} from '../models/card_creation_success.model';
import {PaymentInformation} from '../models/payment_info.model';
import {PaymentTransactionStatus} from '../models/payment_transaction.model';
import axios from 'axios';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) {}

  createNewCard(card: Card) {
    return this.http.post<CardCreationSuccess>(`/card/save`, card, httpOptions);
    // return axios.post(`/card/save`, card);
  }

  completePayment(paymentInfo: PaymentInformation) {
    return this.http.post<PaymentTransactionStatus>(`/payment/completePayment`, paymentInfo, httpOptions);
  }
}
