import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/global";
import { GlobalStyle } from "./styles/themes/default";
import { Header } from "./components/Header";
import { Blog } from "./pages/blog";
import { BrowserRouter } from "react-router-dom";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Blog />
      </BrowserRouter>
    </ThemeProvider>
  )
}
