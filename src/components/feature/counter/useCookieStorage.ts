export default function useCookieStorage() {
  const saveCookies = (nCookies: number) => {
    console.log("saving cookies:", nCookies);
    localStorage.setItem("cookies", JSON.stringify(nCookies));
  };

  const loadCookies = (): number => {
    const data = localStorage.getItem("cookies");
    const cookies = data ? Number.parseInt(data) : 0;
    console.log("loading cookies:", cookies);
    return cookies;
  };

  const deleteProgress = () => {
    console.log("deleting progress...");
    localStorage.removeItem("cookies");
  };

  return {
    saveCookies,
    loadCookies,
    deleteProgress,
  };
}
