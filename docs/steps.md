# Create vite+React + tailwindcss project

# Services

- Appwrite Backend as a services
- TinyMce as Text Editor
- React hook form
- React-redux

- ## Install pkg and dependencies
- @reduxjs/toolkit
- react-redux
- react-router-dom
- appwrite
- @tinymce/tinymce-react
- html-react-parser
- react-hook-form

# set-up env

- see in `env-setup.md` file

### setup appwrite account

- make a new project , name it
- copy project id to .env
- and appwrite base url
- make database and copy its id to .env
- create collection, name it, copy id to .env
- then go to collection > setting > set permissions > allow all users to create, read, update, delete
- then create document structure of the collection
- go to attributes in collection
- set attributes like Title, content, featured image, status, userid, and set their types and size
- then make indexes , set index for status
- then go to storage option in appwrite, make a new bucket for images
- copy bucket id and add to .env
- set permission for buckets , all user , create , read, update, delete

### TinyMce

-

### React Hook Forms

-

###
