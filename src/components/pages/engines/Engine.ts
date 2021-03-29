export interface Engine {
  constructor: Function;
  create(): void;
  getElement?(): JSX.Element;
}
