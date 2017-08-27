import React from 'react';
import './Board.less';
import { MiniMenu } from '../';
const Board = ({ data, onDelete, onEdit }) => {

  let menu = [
    {
      title: 'Удалить',
      onClick: onDelete,
    }
  ]

  let info = data.map((val,key) => (
    <tr key={key}>
      <td>{val.id}</td>
      <td>{val.title}</td>
      <td>{val.text}</td>
      <td>{val.city}</td>
      <td>{val.phone}</td>
      <td><img src={val.image} width="120px"/></td>
      <td><MiniMenu menu={menu} id={val.id}/></td>
    </tr>
  ))

  return (
    <div className="mobile-scroll">
      <table>
        <thead>
          <tr>
            <td>№</td>
            <td>Название</td>
            <td>Описание</td>
            <td>Город</td>
            <td>Телефон</td>
            <td>Картинка</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {info}
        </tbody>
      </table>
    </div>
  )
}

export default Board;
