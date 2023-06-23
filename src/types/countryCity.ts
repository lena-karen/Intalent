export type countryType = {
  flag: string;
  id: string;
  value: string;
  label: string;
}

export type cityType = Omit<countryType, "flag" | "id">;
