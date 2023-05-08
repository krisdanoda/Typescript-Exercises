  type Person = {
    id?: string;
    name: string;
    age: number;
    address?: Address;
  }

  type Address = {
      id?: string;
      street: string;
      city: string;
      country: string;
      zip: string;
  }
  type Theme = {
      isLight: boolean;
      light: {
          text: string;
          ui: string;
          bg: string;
      };
      dark: {
          text: string;
          ui: string;
          bg: string;
      };
  };

export type {Address, Person, Theme}