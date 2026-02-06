export interface HasName {
  name: string;
}

export interface HasAge {
  age: number;
}

export interface HasEmail {
  email: string;
}

// Intersection type - must have ALL properties
export type Person = HasName & HasAge & HasEmail;

// Extended intersection
export type Employee = Person & {
  employeeId: string;
  department: string;
};
