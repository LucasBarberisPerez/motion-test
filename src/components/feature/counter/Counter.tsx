import style from "./Counter.module.scss";
import cookieImage from "../../../assets/cookie.png";
import { motion, AnimatePresence } from "framer-motion";
import useCookieCounter from "./useCookieCounter";
import useCookieStorage from "./useCookieStorage";
import { useEffect } from "react";

export default function Counter() {
  const { loadCookies, saveCookies } = useCookieStorage();
  const { cookies, handleClick, showUpdate } = useCookieCounter(loadCookies());
  useEffect(() => {
    //debounce for save progress when user is inactive for 0.5 seconds.
    const timer = setTimeout(() => {
      saveCookies(cookies);
    }, 500);
    return () => clearTimeout(timer);
  }, [cookies]);

  return (
    <div className={style.counter_container}>
      <h1>Cookies</h1>
      <button className={style.cookie_counter_button} onClick={handleClick}>
        <motion.img
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          whileHover={{ scale: [1.1, 1] }}
          className={style.cookie_image}
          src={cookieImage}
          alt="Cookie image"
        />
      </button>
      <p>Your amount of cookies is:</p>
      <div>
        <motion.span transition={{ duration: 0.25 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={cookies} className={style.cookie_amount}>
          {cookies}
        </motion.span>
        <AnimatePresence>
          {showUpdate && (
            <motion.span
              className={style.cookie_sum}
              key={cookies}
              transition={{ duration: 0.25 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              +1
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <button
        className={style.clear}
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Clear storage
      </button>
    </div>
  );
}
