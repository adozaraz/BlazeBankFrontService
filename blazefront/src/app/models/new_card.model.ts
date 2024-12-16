export class Card {
  cardNumber: string;
  accountNumber: string;
  expirationDate: string;
  cardType: string;
  walletType: string;
  cvv: number;
  balance: string;
  isBlocked: boolean;


  constructor(cardNumber: string, accountNumber: string, expirationDate: string, cardType: string, cvv: number, balance: string) {
    this.cardNumber = cardNumber;
    this.accountNumber = accountNumber;
    this.expirationDate = expirationDate;
    this.cardType = cardType;
    this.walletType = "RUB";
    this.cvv = cvv;
    this.balance = balance;
    this.isBlocked = false;
  }
}
