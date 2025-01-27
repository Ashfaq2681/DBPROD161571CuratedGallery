import { useState } from "react";

export default function Subscription() {
  const [inputfields, setInputfields] = useState({
    firstName: "",
    fullName: "",
    email: "",
    contact: "",
    profession: "",
  });
  //console.log(inputfields);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputfields((preInputfields) => ({ ...preInputfields, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center">
      <div className="border border-solid w-8/12 flex flex-col justify-center p-3 rounded-md text-gray-600 mt-3">
        <div className="text-lg font-bold my-3">User Subscription Form</div>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="firstName"
              value={inputfields.firstName}
              onChange={handleChange}
              className="border border-solid w-full py-2 rounded-md pl-2 text-sm"
              placeholder="Name"
            ></input>
          </div>
          <div className="my-3">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={inputfields.fullName}
              onChange={handleChange}
              className="border border-solid w-full py-2 rounded-md pl-2 text-sm "
              placeholder="Full name"
            ></input>
          </div>
          <div className="my-3">
            <label htmlFor="name">Name</label>
            <input
              type="email"
              name="email"
              value={inputfields.email}
              onChange={handleChange}
              className="border border-solid w-full py-2 rounded-md pl-2 text-sm"
              placeholder="example@gamil.com ..."
            ></input>
          </div>
          <div className="block sm:flex my-3 w-full ">
            <div className="w-full p-1">
              <label htmlFor="name">Contact</label>
              <input
                type="number"
                name="contact"
                value={inputfields.contact}
                onChange={handleChange}
                className="border border-solid w-full py-2 rounded-md pl-2 text-sm "
                placeholder="Contact "
              ></input>
            </div>
            <div className="w-full p-1">
              <label htmlFor="name">Profession</label>
              <input
                type="text"
                name="profession"
                value={inputfields.profession}
                onChange={() => handleChange()}
                className="border border-solid w-full py-2 rounded-md pl-2 text-sm"
                placeholder="Profession"
              ></input>
            </div>
          </div>
          <div className="my-3">
            <button
              className="bg-blue-600 text-white text-sm px-4 py-1 rounded-md"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
