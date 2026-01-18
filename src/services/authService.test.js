import { describe, it, expect, beforeEach } from 'vitest';
import { authService } from '../services/authService';

describe('authService', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('should authenticate with correct password', async () => {
        const result = await authService.login('admin'); // Uses default fallback in test env if env var not set
        expect(result).toBe(true);
        expect(authService.isAuthenticated()).toBe(true);
    });

    it('should fail with incorrect password', async () => {
        await expect(authService.login('wrong')).rejects.toThrow('Contraseña incorrecta');
        expect(authService.isAuthenticated()).toBe(false);
    });

    it('should logout correctly', async () => {
        await authService.login('admin');
        authService.logout();
        expect(authService.isAuthenticated()).toBe(false);
    });
});
