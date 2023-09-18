export default interface Fun {
  isOn(): boolean;
  increaseVelocity(): void;
  decreaseVelocity(): void;
  getCurrentVelocity(): number;
}
