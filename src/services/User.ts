import Avatar from "assets/images/avatar.png";

export default class User {
  static async getUserDeposit() {
    // here should be an API request to get user balance
    await new Promise(resolve => setTimeout(resolve, 700));
    return 125.02;
  }

  static async getUserInfo() {
    // here should be an API request to get user balance
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {
      logoLink: Avatar,
      email: "example@email.com"
    };
  }
}
