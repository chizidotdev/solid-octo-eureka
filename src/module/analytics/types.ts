type FixedArray<N extends number, T> = N extends 0
  ? never[]
  : {
      0: T;
      length: N;
    } & ReadonlyArray<T>;

export interface TRegistration {
  subscription: FixedArray<7, number>;
  newsletter: FixedArray<7, number>;
}

export interface TUniqueVisitors {
  amount: number;
  date: Date;
}

export interface TSessionsPerDay {
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
}

export interface TUsersByGender {
  men: number;
  women: number;
}

export interface TNavigation {
  amount: number;
  route: string;
}

export interface TUsersByDevice {
  amount: number;
  device: "Mobile" | "Tablet" | "Desktop";
}

export interface TUniqueVisitorsByLocation {
  amount: number;
  location: string;
}

export interface TCountries {
  amount: number;
  country: string;
}

export interface TMostViewedRhendors {
  amount: number;
  rhendor: string;
}

export interface TSummary {
  registration: number;
  traffic: number;
  topCountry: TCountries["country"];
  topRhendor: TMostViewedRhendors["rhendor"];
  topService: string;
}

export interface TMostViewed {
  title: string;
  value: number;
  imageUrl?: string;
  status: {
    value: number;
    rank: "up" | "down";
  };
}
