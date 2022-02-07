import { useState, useEffect} from "react";

function usePersistedState(key: string, initialTheme: any) {
  const [theme, setTheme] = useState(() => {
      if (typeof window !== "undefined") {
        const storagedTheme = window.localStorage.getItem(key);

        return JSON.parse(storagedTheme) || initialTheme;
      }
      return(initialTheme);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);

  return [theme, setTheme]
}

export default usePersistedState;