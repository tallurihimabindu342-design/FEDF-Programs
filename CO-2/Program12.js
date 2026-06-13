export const userInfo: [number, string] =
  [1, "Charan"];

export const Status = {
  Active: "ACTIVE",
  Inactive: "INACTIVE"
} as const;

export type StatusType =
  typeof Status[keyof typeof Status];

export const currentStatus: StatusType =
  Status.Active;

export const dateOfBirth: Date =
  new Date("2000-01-01");

export const notAssigned: undefined =
  undefined;

export const emptyValue: null = null;