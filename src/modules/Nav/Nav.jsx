
import { useState, useEffect } from "react";
import s from './Nav.module.css'

const Nav = () => {
const [time, setTime] = useState(new Date())

useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatingTime = (time) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

    return (
        <nav className={s.navPanel}>
            <div className={s.time}>
                {formatingTime(time)}
            </div>

            <div>
            SQLite Links
            </div>
        </nav>
    )
}

export default Nav;