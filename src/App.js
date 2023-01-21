// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';

// ----------------------------------------------------------------------
// https://mui.com/store/previews/minimal-dashboard-free/
export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );
}
