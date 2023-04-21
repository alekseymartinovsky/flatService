export class TokenService {
    public saveToken(token: string) {
        localStorage.setItem("token", token);
    }

    public getToken(): string | null {
        return localStorage.getItem("token");
    }
}

export const tokenService = new TokenService();
