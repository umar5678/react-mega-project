**Post Card**
do some imports

- import appwriteService from '../appwrite/config' >> this file is imported as appwriteService because its exported as default , so we can import it with any name
- import { Link } from 'react-router-dom'

```js
const PostCard = ({ $id, featuredImage, title }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold"> {title}</h2>
      </div>
    </Link>
  );
};
```

- this function has props id, featuredImage, and title , it calls appwrite service's method to preview imeage
