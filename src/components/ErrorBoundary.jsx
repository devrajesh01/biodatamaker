import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
                    <div className="max-w-xl w-full bg-white rounded-xl shadow-2xl overflow-hidden border border-red-200">
                        <div className="bg-red-600 px-6 py-4">
                            <h2 className="text-white text-xl font-bold flex items-center gap-2">
                                <span>⚠️</span> Something went wrong
                            </h2>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 mb-4">
                                The biodata generator encountered an unexpected error.
                            </p>

                            <div className="bg-red-50 p-4 rounded-lg text-sm font-mono text-red-800 mb-6 overflow-auto max-h-60 border border-red-100">
                                <p className="font-bold mb-2">{this.state.error && this.state.error.toString()}</p>
                                <WhiteSpacePre>{this.state.errorInfo && this.state.errorInfo.componentStack}</WhiteSpacePre>
                            </div>

                            <button
                                onClick={() => window.location.reload()}
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
                            >
                                Reload Page
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

const WhiteSpacePre = ({ children }) => (
    <pre className="whitespace-pre-wrap break-words">{children}</pre>
);

export default ErrorBoundary;
