'use client';

import { useEffect, useState } from 'react';

// type GameType = {
//   index: Number;
//   games: GameType[];
// }

const Game = () => {
  const [children, setChildren] = useState([[[]], [], [], []]);

  useEffect(() => content(children), []);

  function content(child) {
    for (let i = 0; i < child.length; i++) {
      if (child[i]) content(child[i]);
      return <Button index={i} />;
    }
  }

  return <>{content}</>;
};

const Button = ({ index }) => {
  const [children, setChildren] = useState([]);
  return (
    <>
      <div>
        {index + 1}
        <button className="w-8 h-8 border rounded-md m-2">+</button>
        <button className="w-8 h-8 border rounded-md m-2">-</button>
        {children.map((_, i) => (
          <Button index={i} />
        ))}
      </div>
    </>
  );
};

export default Game;
