export class CustomError400 extends Error {
  constructor(message: string) {
    super(message);
    this.name = message;
  }
}
