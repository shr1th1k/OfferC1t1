export class SignupModel {

  constructor( private title: string = "", private firstName: string = "", 
      private lastName: string = "", private email: string = "", 
      private password: string = "", private cpassword: string = "", 
      private contactNumber: string = "", private gender: string = "", 
      private dob: string = "", private area: string = "") {}

  setTitle(option: string) {
       this.title = option;
  }

}