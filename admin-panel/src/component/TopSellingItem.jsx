import React from "react";
import "./topSelling.css";

function TopSellingItem({ item }) {
    console.log(item);
  return(
    <tr>
        <th scope="row">

           <img src={item?.preview}  alt="" />
        </th>
        <td>
            <a href="/" className="text-primary fw-bold">
                {item.name}
            </a>
        </td>
        <td>${item.price.toFixed(2)}</td>
        <td className="fw-bold">${item.sold}</td>
        <td>${(item.price * item.sold).toLocaleString('en-US')}</td>
    </tr>
  )
}

export default TopSellingItem;
