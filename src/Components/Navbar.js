import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Snav } from './Components';

const Navbar = () => {
  const [isAnimated, setisAnimated] = useState(false);

  useEffect(() => {
    let isTrue = true;

    setTimeout(() => {
      isTrue ? setisAnimated(true) : null;
    }, 750);

    return () => {
      let isTrue = false;
    };
  }, []);

  return (
    <Snav isAnimated={isAnimated}>
      <Link href="/MainPage">
        <div>
          Ob
          <sup>®</sup>
          {isAnimated && '— 23'}
        </div>
      </Link>

      <Link href="/Login" className="logout">
        Log Out
      </Link>
    </Snav>
  );
};

export default Navbar;
