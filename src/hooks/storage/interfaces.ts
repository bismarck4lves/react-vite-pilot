export interface IStorage {
    get: () => unknown;
    set: (value: unknown) => void;
    destroy: () => void;
  }
  