export class AddressEntry {
  public firstName: string;
  public lastName: string;
  public phone?: string;
  public email?: string;
  public notes?: string;


  constructor(firstName: string, lastName: string, phone?: string, email?: string, notes?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.notes = notes;
  }
}
