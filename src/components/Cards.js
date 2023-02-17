import React from "react";
import Card from "./Card";

const cards = [
  {
    id: 1,
    title: "Facebook Add",
    url: "https://faztweb.com",
  },
  {
    id: 2,
    title: "S.E.M",
    url: "https://blog.faztweb.com",
  },
  {
    id: 3,
    title: "S.E.O",
    url: "https://youtube.com/fazttech",
  },
  {
    id: 4,
    title: "Comunity Manager",
    url: "https://youtube.com/fazttech",
  },
  {
    id: 5,
    title: "Email Marketing",
    url: "https://youtube.com/fazttech",
  }
];

function Cards() {
  return (
    <div className="container cont d-flex justify-content-space-around align-items-center w-100 h8-80">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;