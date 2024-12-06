import { useState } from "react";

export default function useCounter(initialValue:number) {
  const [cookies, setCookies] = useState<number>(initialValue);
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const handleClick = () => {
    setCookies((prev) => prev + 1);
    setShowUpdate(true);
    setTimeout(() => {
      setShowUpdate(false);
    }, 250);
  };
  return { cookies, handleClick, showUpdate };
}
