export function request(callback: Function, maxDelay = 3000): void {
  setTimeout(callback, Math.random() * maxDelay);
}
