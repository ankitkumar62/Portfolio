import React from "react";

export default function contact() {
  return (
    <div className="max-w-sm m-40 mx-auto rounded-xl xl:h-[300px] xl:relative xl:bottom-[280px]">
      <form className=" sm:ml-5 rounded flex flex-col gap-4 mt-12 ">
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg max-w-sm xl:max-w-sm hover:sm:scale-105 ml-3"
          required
        />
        <input
          type="text"
          placeholder="Subjact"
          className="border p-3 rounded-lg 
          max-w-sm xl:max-w-lg hover:sm:scale-105 ml-3 "
          required
        />
        <input
          type="text"
          className="border p-3 rounded-lg max-w-sm xl:max-w-lg hover:sm:scale-105 ml-3"
          required
          placeholder="Meassage"
        />
        <button className="text-white bg-purple-600 h-12 rounded-lg hover:opacity-95 disabled:opacity-85 max-w-lg hover:sm:scale-105 uppercase ml-3">
          Send
        </button>
      </form>
    </div>
  );
}
