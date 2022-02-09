import { createContext } from "use-context-selector"

export const BaseContext = createContext(null)

export const BaseProvider = ({ children, theme, setTheme }) => {
  return (
    <BaseContext.Provider value={{ theme, setTheme }}>
      {children}
    </BaseContext.Provider>
  )
}
