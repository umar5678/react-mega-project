## How to set env in vite

- `.env` file should be in root of project
- make `.env.sample` file , for sample variable names...
- Prefix all variables with `VITE_`
- example
  - `VITE_VAR_1 = 123123`
- for importing, use

  - `import.meta.env.VITE_var-name`
  - example:
    - `import.meta.env.VITE_VAR_1`

- get and set envs from appwrite or from whatever
- after all done
- now its time to import them

- make a new folder in src, name it whatever you want , `conf`
- make a new file co`conf.js`
- make a conf obj and default export it. set key : value pairs ,
- key as env name and wrap the import.mata.env.VITE_var-name in String()
- example:
- ```js
  const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  };

  export default conf;
  ```

-
