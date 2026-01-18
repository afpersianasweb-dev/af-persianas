import React from 'react';
import Button from './Button';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
                    <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 text-center border border-neutral-100">
                        <div className="mx-auto w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-neutral-800 mb-2">Algo salió mal</h2>
                        <p className="text-neutral-600 mb-8">
                            Ha ocurrido un error inesperado. Por favor, intenta recargar la página.
                        </p>
                        <div className="flex flex-col space-y-3">
                            <Button onClick={this.handleReload} variant="primary" className="w-full">
                                Recargar Página
                            </Button>
                            <Button to="/" variant="outline" className="w-full text-center block" onClick={() => this.setState({ hasError: false })}>
                                Volver al Inicio
                            </Button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
