import React from "react";

function NewPostItem({ item }) {
  return (
    <div className="post-item clearfix">
      <img src={item.img} alt=""></img>
      <h4>
        <a href="#">{item.title}</a>
      </h4>
      <p>{item.subtitle}...</p>
    </div>
  );
}

export default NewPostItem;
