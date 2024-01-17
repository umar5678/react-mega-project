### Vender login

- reuseable login services to be used on different patforms
-

### Making services

- create a new folder in src named `appwrite` that hold all the things related to appwrite
- in it, make new file `auth.js` as authentication service
- in this file : import conf
- import Account Client and ID from appwrite
- then make a class named `AuthServce` and export it
- make a authService method `const authService = new AuthService()`
-

- in `AuthService` class make a client set it to new Client()
- and make account but do not by default set it to new Account() because it recives client as parameter
- instead make a constructor
- whenever we will call `authService` method , we can access account from there

- in constructor > first give reference of client > this.client.all_methods_to_be_used

- ```js
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    }
  ```
- and the whole class looks like this :
- ```js
  export class AuthService {
    client = new Client();
    account;

    constructor() {
      this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
    }
  }
  ```

- now client has values of endPoint and ProjectId, then we can make account and set its parameter client
- access account `this.account` and set `new Account(this.client)`

- outside this constructor
- create an asyn method to `createAccount`
- this method recives `{email, password, and name}` according to appwrite docs
- in this method , access the account using `this.account` and create account

- ```js
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
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error(error);
    }
  }
  ```
- create acount done ! now working on Login method
- same make a new async login method
- ```js
  async login({email, password}) {
    try {
        return await this.account.createEmailSession(email, password)
    } catch (error) {
        console.error(error)
    }
  }
  ```
- now we can call this method in createAccount fn to login
- ```js
  if (userAccount) {
    //call another method to login
    return this.login({ email, password });
  } else {
    return userAccount;
  }
  ```

- then make a method to get Curnent user

- then make a method to logout

```js
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
```

- all done
- we can use this file as a template , for auth servise , and can be used for firebase, appwrite , or any other service ,
- just need to change according to service api and techniqe requirement
- parameter are going to be same
- this is the future proof code
