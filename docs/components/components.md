- make a new folder in src `components`
- make Header and Footer folders and Header.jsx and Footer.jsx filse in them respectively
- for easy expoting, make an index file in component folder
-

### App.jsx

practicing the state management with redux

### Components

**Container**

- make a container folder in component and `Container.jsx` file in it
- Container is just a box that provide height , width , styling properties , it recives childern as props

**Footer**

- in footer component copy paste code from hitesh git hub repo

**Logo**

- directly create new file in component
- export and import it in footer

**Header**

- in heder comp
- import {Container, Logo, LogoutBtn} from '../index'
- import { Link } from "react-router-dom";
- import { useSelector } from "react-redux";
- import { useNavigate } from "react-router-dom";
- first of all we need to recall from state if user is authenticated or not
- make navbar > make navItems array on top and map it in header nav tag
-
-
- create a new Component file `Logout.jsx` in Header folder , for conditionaly showing
- **LogoutBtn**
- in logoutbtn component
- import useDispatch
- import authSevice from apperite/config
- import logout from store/authSlice
- make a func to handle logout

**Common Button**

- Make Button.jsx in components
- ```js
  const Button = ({
    childern, // aslo as 'btn text', 'text' etc
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
  }) => {
    return (
      <button
        className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`}
        {...props}
      >
        {childern}
      </button>
    );
  };
  ```

**Input**

- make a new common input component
- ```js
  import React, { useId } from "react";

  const Input = React.forwardRef(function Input(
    { label, type = "text", className = "", ...props },
    ref
  ) {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label className="inline-block mb-1 pl-1" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full  ${className} `}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
  });

  export default Input;
  ```

- this component is using concept of forword ref

**Select**

- make a common Select.jsx component
- pass props object > options, label, classname, ...props
- then outside this object pass ref
- import useId from react , use it as const id = useId()
- ```js
  import React, { useId } from "react";

  function Select({ label, className = "", options, ...props }, ref) {
    const id = useId();
    return (
      <div className="w-full ">
        {label && <label htmlFor={id} className=""></label>}
        <select
          {...props}
          id={id}
          ref={ref}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-200 w-full duration-200 border border-gray-200 ${className}`}
        >
          {options?.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }

  export default React.forwardRef(Select);
  ```

- this function shows another method of using useRef hook

- other components ie. postCard , form , login , singup are in other files
