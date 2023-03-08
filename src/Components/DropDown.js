import styles from '@/styles/DropDown.module.css';
import { useState } from 'react';

export default function DropDown() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState('Expense');
  function handleBlur(e) {
    console.log(e);
  }
  return (
    <div className={styles.Main}>
      <div className={styles.dropdown}>
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className={styles.dropdown_btn}
        >
          {selected}
        </div>

        <div
          className={styles.dropdown_content}
          style={{ display: isActive ? 'block' : 'none' }}
        >
          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className={styles.item}
          >
            Expense
          </div>

          <div
            className={styles.item}
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Income
          </div>
        </div>
      </div>
    </div>
  );
}
