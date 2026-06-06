import { useState, useCallback } from 'react';

interface ErrorState {
  hasError: boolean;
  error: Error | null;
  errorInfo: string | null;
}

export function useErrorHandler() {
  const [errorState, setErrorState] = useState<ErrorState>({
    hasError: false,
    error: null,
    errorInfo: null,
  });

  const handleError = useCallback((error: Error, errorInfo?: string) => {
    console.error('Error caught by error handler:', error, errorInfo);
    setErrorState({
      hasError: true,
      error,
      errorInfo: errorInfo || error.message,
    });
  }, []);

  const resetError = useCallback(() => {
    setErrorState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  }, []);

  return {
    ...errorState,
    handleError,
    resetError,
  };
}
