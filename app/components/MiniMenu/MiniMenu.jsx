import React from 'react';
import './MiniMenu.less';
const MiniMenu = ({ menu, id }) => {
  let data = menu.map(({ onClick, title },key) => (
    <div data-name={title} key={key} onClick={() => onClick(id)}>{title}</div>
  ))
  return (
    <div className="mini-menu">
      <span>...</span>
      <div className="hidden-menu">
        {data}
      </div>
    </div>
  )
}

export default MiniMenu;
