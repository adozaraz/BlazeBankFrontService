export class PaymentTransactionStatus {
  status: string;
  description: string;


  constructor(status: string, description: string) {
    this.status = status;
    this.description = description;
  }
}
