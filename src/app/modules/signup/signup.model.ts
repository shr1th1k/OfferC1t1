interface Signup {
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    cpassword: string;
    contactNumber: string;
    gender: string;
    dob: string;
    area: string;
}

export class SignupModel {

  constructor(formparams: Signup) { }

}