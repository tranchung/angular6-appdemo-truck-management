export class Truck {
  id?: number;
  firstName?: string;
  lastName?: string;
  emailId?: string;
  active?: boolean;
  constructor(id?: number, firstName?: string, laseName?: string, emailId?: string, active?: boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = laseName;
    this.emailId = emailId;
    this.active = active;
  }
  public static getDefault(): Truck {
    return new Truck();
  }
}

