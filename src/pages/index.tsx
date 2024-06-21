import { useState } from 'react';
import styles from './index.module.css';

const directions = [
  [1, 0],
  [1, 1],
  [0, 1],
  [1, -1],
  [-1, 0],
  [-1, -1],
  [0, -1],
  [-1, 1],
];

const bombs = (newUserInputs: number[][]) => {
  if (newUserInputs.flat().filter((cell) => cell === 0).length === 81) {
    for (let m = 0; m < 10; m++) {
      const randomY = Math.floor(Math.random() * 9);
      const randomX = Math.floor(Math.random() * 9);
      console.log(randomY, randomX);
      newUserInputs[randomY][randomX] = 11;
      // setuserInputs(newUserInputs);
    }
  }
  return newUserInputs;
};
const Home = () => {
  const [samplePos, setsamplePos] = useState(0);

  const [bombMap, setBombMap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [userInputs, setuserInputs] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [bomb, setbomb] = useState([
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]);

  const ClickHandler = (x: number, y: number) => {
    // console.log(x, y);

    const newbombmap = structuredClone(bombMap);
    const bombset = bombs(newbombmap);
    console.log(bombset);
    let a = 0;
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        a += 1;
        if (bombset[y][x] === 11) continue;
        let bombcount = 0;
        for (const [dx, dy] of directions) {
          const ax = dx + x;
          const bx = dy + y;
          if (0 > ax || ax > 8 || 0 > bx || bx > 8) continue;
          if (bombset[bx][ax] === 11) {
            bombcount += 1;
          }
        }
        bombset[y][x] = bombcount;
      }
    }
    console.log(a);
    setBombMap(bombset);
    userInputs[y][x] = newbombmap[y][x];
    setuserInputs(userInputs);

    for (let i = 1; i < directions.length; i = i++) {
      const yy = y + directions[i][1];
      const xx = x + directions[i][0];
      if (yy < 0 || yy > 8 || xx < 0 || xx > 8) continue;
      if (bombset[yy][xx] === 0 && userInputs[yy][xx] === -1) {
        userInputs[yy][xx] = 0;
      }
    }
  };

  // const board: number[][] = [];
  // console.log(samplePos);

  return (
    <div className={styles.container}>
      <div className={styles.bombMapstyle}>
        {userInputs.map((row, y) =>
          row.map((color, x) => (
            <div
              className={styles.cellstyle}
              style={{ backgroundPosition: `${-30 * (color - 1)}px` }}
              key={`${x}-${y}`}
              onClick={() => ClickHandler(x, y)}
            >
              <div className={styles.stonestyle} style={{}} />
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
