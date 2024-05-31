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

  const ClickHandler = (x: number, y: number) => {
    // console.log(x, y);

    const newUserInputs = structuredClone(userInputs);
    const bombset = bombs(newUserInputs);
    console.log(bombset);
    setuserInputs(bombset);
    for (const [dx, dy] of directions) {
      const a = 1;
      while (a > 0 && a < 9) {
        const ax = x + a * dx;
        const bx = y + a * dy;
        if (ax >= 8 || bx >= 8 || ax < 0 || bx < 0 || bombMap[ax][bx] === 0) {
          break;
        }
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
              <div className={styles.stonestyle} />
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
