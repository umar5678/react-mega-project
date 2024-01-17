this file does the major configuration for storage and bucket and database for the appwrite service

- create a new file in appwrite folder `config.js` because it holdes major configurations for appwrite DB, storage etc
- import conf from "../conf/conf";
- import { Client, Databases, Storage, Query, ID } from "appwrite";
- as in auth service we did
- create and export class constructor
- make a method from this class and export it
- ```js
  import conf from "../conf/conf";
  import { Client, Databases, Storage, Query, ID } from "appwrite";

  export class Servise {
    client = new Client();
    databases;
    bucket;
    constructor() {
      this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
    }
  }

  const service = new Servise();

  export default service;
  ```

- as in auth.js
- now constructor has made client
- now with the help of client , we can make databases, and buckets etc
- ```js
    constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client)
  }
  ```
- outside this constructor > make method for create post
- this fn create a document in appwrite database
- ```js
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
            title,
            content,
            featuredImage,
            status,
            userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service create post :: error", error);
    }}
  ```

- this fn updates a documen tin appwrite
- ```js
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("appwrite > updatepost error", error);
    }
  }
  ```

- this fn deletes document :
- ```js
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("appwrite > deletPost Error", error);
      return false;
    }
  }
  ```
- same, to get post, use slug as document ID and use getDocument()

- get posts that are active
- in this case we need to use Query
- apply the query as a parameter
- ```js
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("appwrite > get posts error", error);
    }
  }
  ```
- this is a file upload fn
- ```js
   async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("appwrite > upload file error", error);
      return false;
    }}
  ```
- this method delete file
- ```js
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("appwrite > delete file ", error);
      return false;
    }
  }
  ```
- to get file preview
- ```js
   getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
  ```
