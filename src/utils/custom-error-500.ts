export class CustomError500 extends Error {
  constructor(message: string) {
    super(message);
    this.name = message;
  }
}
