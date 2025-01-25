import App from "../App";
import { ThemeProvider } from "../hooks/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
