import { useCookies } from "react-cookie";

const useDarkMode = () => {
  const [cookies, setCookie] = useCookies(["darkMode"]);

  const handleUpdateDarkMode = () => {
    try {
      const dark = JSON.parse(cookies.darkMode);
      if (dark) setCookie("darkMode", false);
      else setCookie("darkMode", true);
    } catch {
      setCookie("darkMode", true);
    }
    console.log(cookies.darkMode);
  };
  return {
    darkMode: cookies.darkMode ? JSON.parse(cookies.darkMode) : true,
    setDarkMode: handleUpdateDarkMode,
  };
};

export default useDarkMode;
