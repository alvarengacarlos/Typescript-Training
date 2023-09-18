import Fun from "./Fun";

export default class FunImpl implements Fun {
  protected currentVelocity: number;

  constructor() {
    this.currentVelocity = 0;
  }

  isOn(): boolean {
    if (this.currentVelocity > 0) {
      return true;
    }
    return false;
  }

  increaseVelocity(): void {
    if (this.currentVelocity < 3) {
      this.currentVelocity++;
    }
  }

  decreaseVelocity(): void {
    if (this.currentVelocity > 0) {
      this.currentVelocity--;
    }
  }

  getCurrentVelocity(): number {
    return this.currentVelocity;
  }
}
