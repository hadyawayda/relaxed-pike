'use client';

import { useState } from 'react';

const PlusMinus = ({ val, plus, minus, level }) => {
  return (
    <div style={{ marginLeft: `${level * 10}px` }}>
      {val}
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};

const Button = () => {
  const [values, setValues] = useState({ val: 1, children: [], level: 0 });
  const [level, setLevel] = useState(0);

  const handlePlus = (path) => {
    setValues((currentValues) => {
      const newValues = JSON.parse(JSON.stringify(currentValues));

      let target = newValues;
      path.forEach((index) => {
        target = target.children[index];
      });

      target.children.push({
        val: target.children.length + 1,
        children: [],
        level: target.level + 1,
      });
      return newValues;
    });
  };

  const handleMinus = (path) => {
    setValues((currentValues) => {
      const newValues = JSON.parse(JSON.stringify(currentValues));

      let target = newValues;
      path.forEach((index) => {
        target = target.children[index];
      });

      target.children = [];
      return newValues;
    });
  };

  const renderPlusMinus = (node, path = []) => {
    return (
      <div key={path.join(':')}>
        <PlusMinus
          val={node.val}
          plus={() => handlePlus(path)}
          minus={() => handleMinus(path)}
          level={node.level}
        />
        {node.children.map((child, index) =>
          renderPlusMinus(child, path.concat(index))
        )}
      </div>
    );
  };

  return <>{renderPlusMinus(values)}</>;
};

export default Button;
