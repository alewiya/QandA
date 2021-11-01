export class Member {
  id: number;
  FirstName: string;
 LastName: string;
  MiddleName: string;
  Email: string;
  Constructor() {
    this.id = 0;
    this.FirstName = "";
    this.LastName = "";
    this.MiddleName = "";
    this.Email = "";
  }
}
