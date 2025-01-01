export class PaymentInformation {
  senderCardNumber: string;
  senderAccountNumber: string;
  amount: number;
  receiverCardNumber: string;
  receiverAccountNumber: string;
  receiverBank: string;
  cvv: string;

  constructor(senderCardNumber: string, senderAccountNumber: string, amount: number, receiverCardNumber: string, receiverAccountNumber: string, receiverBank: string, cvv: string) {
    this.senderCardNumber = senderCardNumber;
    this.senderAccountNumber = senderAccountNumber;
    this.amount = amount;
    this.receiverCardNumber = receiverCardNumber;
    this.receiverAccountNumber = receiverAccountNumber;
    this.receiverBank = receiverBank;
    this.cvv = cvv;
  }
}
