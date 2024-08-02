import ThemeProvider from './providers/theme.provider';
import AppRouter from './routes';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/shared/Fallback';

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
