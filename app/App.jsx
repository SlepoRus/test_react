import React from 'react';
import './App.less';
import { BoardList, AddAdvent } from './containers';

const App = () => (
  <div>
    <header>
      Доска объявлений
    </header>
    <main>
      <div className="main-board">
        <AddAdvent />
        <BoardList />
      </div>
    </main>
  </div>
)

export default App;
