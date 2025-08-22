import React from "react";
const Home = () => {
  return (
    <div className="w-full px-5 min-h-[calc(100vh-60px)]">
      <div className="w-full">
        <div>
          <label htmlFor="">Book Name</label>
          <input type="text" placeholder="Book Name" />
        </div>
        <div>
          <label htmlFor="">Book Title</label>
          <input type="text" placeholder="Book Title" />
        </div>
        <div>
          <label htmlFor="">Author</label>
          <input type="text" placeholder="Author" />
        </div>
        <div>
          <label htmlFor="">Selling Price</label>
          <input type="text" placeholder="Selling Price" />
        </div>
        <div>
          <label htmlFor="">Publish Date</label>
          <input type="date" placeholder="Publish Date" />
        </div>
      </div>
    </div>
  );
};
export default Home;
