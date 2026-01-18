import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Lock } from 'lucide-react';
import Button from '../../components/Button';

const Login = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { login } = useAuth();
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await login(password);
            navigate('/admin/dashboard');
        } catch (err) {
            setError('Credenciales incorrectas');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full text-center space-y-8 bg-white p-10 rounded-xl shadow-2xl">
                <div>
                    <div className="mx-auto h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <Lock className="h-6 w-6" />
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Acceso Administrativo
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Área restringida para gestión de catálogo
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                placeholder="Contraseña de acceso"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm font-medium">
                            {error}
                        </div>
                    )}

                    <div>
                        <Button type="submit" variant="primary" className="w-full justify-center" disabled={loading}>
                            {loading ? 'Ingresando...' : 'Ingresar'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
