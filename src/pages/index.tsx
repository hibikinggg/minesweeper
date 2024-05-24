import { useState } from 'react';
import styles from './index.module.css';

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

  const ClickHandler = (x: number, y: number) => {
    // console.log(x, y);
    const newUserInputs = structuredClone(userInputs);
    newUserInputs[y][x] = 1;
    setuserInputs(newUserInputs);
    const math = Math.floor(Math.random() * 10);
    const newmath = Math.floor(Math.random() * 10);
    console.log(math, newmath);
    for (let m = 0; m < 9; m++) {
      const math = Math.floor(Math.random() * 9);
      const newmath = Math.floor(Math.random() * 9);
      newUserInputs[math][newmath] = 11;
      setuserInputs(newUserInputs);
    }
  };

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
  const board: number[][] = [];
  console.log(samplePos);

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
