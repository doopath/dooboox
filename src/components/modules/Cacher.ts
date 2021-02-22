// --|


class Cacher {
  /**
   * @param cache - a cache of the saved elements.
   * @param elementsLimit - max count of the elements in the cache.
   * 
   * @getCurrentSize - get a length of the current cache size.
   * @getElemetsLimit - get a number of maximum elements in the cache.
   * @setElementsLimit - set a number of maximum elements in the cache.
   * @getValue - get a value by a key.
   * @save - save something by key: value in the cache.
   */

  private cache: object;
  private elementsLimit: number;

  public constructor(elementsLimit: number) {
    this.cache = {};
    this.elementsLimit = elementsLimit;
  }

  private scaleCache = (): void => {
    let keys: string[] = Object.keys(this.cache);
    let newCache: object = {};

    keys.forEach((key: string): void => newCache[key] = this.cache[key]);
    this.cache = newCache;
  }

  public getCurrentSize = (): number => {
    return Object.keys(this.cache).length;
  }

  public getElementsLimit = (): number => {
    return this.elementsLimit;
  }

  public setElementsLimit = (newValue: number): void => {
    if (newValue >= Object.keys(this.cache).length) {
      this.elementsLimit = newValue;
    } else {
      this.elementsLimit = newValue;
      this.scaleCache();
    }
  }

  public getValue = (key: string): any => {
    if (this.cache[key] !== undefined) {
      return this.cache[key];
    } else {
      throw new Error(`The element with key=${key} not exists!`);
    }
  }

  public checkElement = (key: string): boolean => {
    if (this.cache[key] !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  public getKeys = (): string[] => {
    return Object.keys(this.cache);
  }

  public save = (key: string, value: any): void => {
    if (Object.keys(this.cache).length === this.elementsLimit && this.elementsLimit !== 0){
      if (this.cache[key] === undefined) {
        throw new Error("Adding a new value will exceed the limit of elements!");
      }
    }

    this.cache[key] = value;
  }
}

const cacher: Cacher = new Cacher(0);
export { cacher };
