export default class User {
    constructor(username,firstname,lastname,email,type, password,role) {
      this.username = username;
      this.firstname = firstname
      this.lastname = lastname;
      this.email = email;
      this.password = password;
      this.role = role;
      this.type = type;
    }
  }