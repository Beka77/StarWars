import React from "react";
import { Link } from "react-router-dom";
const ItemList = (props) => {

  const { data, onitemselected, children: renderLabel } = props;
  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <Link to={`/people/${id}`} key={id}>
      <li
        className="list-group-item"
        key={id}
        onClick={() => onitemselected(id)}
      >
        {label}
      </li>
      </Link>
    );
  });
  return <ul className="Item-list list-group">{items}</ul>;
};
ItemList.defaultProps = {
  onitemselected: ()=>{},
}

export default ItemList;
