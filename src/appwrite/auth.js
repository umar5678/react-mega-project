import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      // check if account is created or not
      if (userAccount) {
        //call another method to login
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.error(error);
    }
  }

  async getCurrUser() {
    try {
      await this.account.get();
    } catch (error) {
      console.error("appwrtie servie error while getting current user ", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("appwrite servide:: logout", error);
    }
  }
}

const authService = new AuthService();

export default authService;
