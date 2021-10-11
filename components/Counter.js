import styles from "../styles/Counter.module.css";
import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <React.Fragment>
      <div>
        <span class={styles.count}>{count}</span>
      </div>
      <div class={styles.control}>
        <button class={styles.button} onClick={() => setCount(count - 1)}>
          -1
        </button>
        <button class={styles.button} onClick={() => setCount(count + 1)}>
          +1
        </button>
      </div>
    </React.Fragment>
  );
}

export default Counter;
