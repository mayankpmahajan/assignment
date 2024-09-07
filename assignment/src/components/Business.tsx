import React from "react";

const Business = () => {
  return (
    <main className="relative z-10 bg-white w-[60vw] rounded-md mt-[-4rem] p-4 h-fit">
      <h1 className="text-xl font-semibold">Company's Business</h1>

      <section className="mt-4 font-medium">
        <h2>Company Type</h2>

        <section className="flex flex-row space-x-2 text-sm mt-2 font-normal">
          <div className="rounded-3xl shadow-2xl w-fit border-[1px] border-gray-300 py-1 px-2">Contact Manufacturing</div>
          <div className="rounded-3xl shadow-2xl w-fit border-[1px] border-gray-300 py-1 px-2">Export</div>
          <div className="rounded-3xl shadow-2xl w-fit border-[1px] border-gray-300 py-1 px-2">White Level Brands</div>
        </section>
      </section>

      <section className="mt-4 font-medium">
        <h2 className="">Product Categories</h2>

        <section className="flex flex-row space-x-2 text-sm mt-2 font-normal" >
          <div className="rounded-3xl shadow-2xl w-fit border-[1px] border-gray-300 py-1 px-2">Juices</div>
          <div className="rounded-3xl shadow-2xl w-fit border-[1px] border-gray-300 py-1 px-2">Vegetables</div>
          <div className="rounded-3xl shadow-2xl w-fit border-[1px] border-gray-300 py-1 px-2">Grain</div>
          <div className="rounded-3xl shadow-2xl w-fit border-[1px] border-gray-300 py-1 px-2">Grain</div>
          <div className="rounded-3xl shadow-2xl w-fit border-[1px] border-gray-300 py-1 px-2">Grain</div>
        </section>
      </section>

      <section className="mt-4 font-medium font-normal">
        <h2>Product Items</h2>

        <section className="flex flex-row space-x-2 text-sm mt-2">
          <div className="rounded-3xl shadow-2xl w-fit border-[1px] border-gray-300 py-1 px-2">Item 01</div>
          <div className="rounded-3xl shadow-2xl w-fit border-[1px] border-gray-300 py-1 px-2">Item 02</div>
          <div className="rounded-3xl shadow-2xl w-fit border-[1px] border-gray-300 py-1 px-2">Item 03</div>
          <div className="rounded-3xl shadow-2xl w-fit border-[1px] border-gray-300 py-1 px-2">Item 04</div>
          <div className="rounded-3xl shadow-2xl w-fit border-[1px] border-gray-300 py-1 px-2">Item 05</div>
        </section>
      </section>
    </main>
  );
};

export default Business;
