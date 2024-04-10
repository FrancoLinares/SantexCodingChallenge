import React, { Component, ErrorInfo } from 'react';
import { GENERIC_ERROR } from './constants';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError = (error: any) => {
    return { hasError: true };
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to an error reporting service
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>{GENERIC_ERROR}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
