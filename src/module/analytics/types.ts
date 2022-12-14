type FixedArray<N extends number, T> = N extends 0
  ? never[]
  : {
      0: T;
      length: N;
    } & ReadonlyArray<T>;

export type TRegistration = {
  subscription: FixedArray<7, number>;
  newsletter: FixedArray<7, number>;
};

export type TUniqueVisitors = {
  amount: number;
  date: Date;
};

export type TSessionsPerDay = {
  amount: number;
  month:
    | "January"
    | "Febuary"
    | "March"
    | "April"
    | "May"
    | "June"
    | "July"
    | "August"
    | "September"
    | "October"
    | "November"
    | "December";
};

export type TUsersByGender = {
  men: number;
  women: number;
};

export type TNavigation = {
  amount: number;
  route: string;
};

export type TUsersByDevice = {
  amount: number;
  device: "Mobile" | "Tablet" | "Desktop";
};

export type TUniqueVisitorsByLocation = {
  amount: number;
  location: string;
};

export type TCountries = {
  amount: number;
  country: string;
};

export type TMostViewedRhendors = {
  amount: number;
  rhendor: string;
};

export type Summary = {
  registration: number;
  traffic: number;
  topCountry: TCountries["country"];
  topRhendor: TMostViewedRhendors["rhendor"];
  topService: string;
};
