// Authentication service to rawg.io by providing a token

import { API_KEY } from "../utils/store"

export default class AuthService {
    private static instance: AuthService
    private static token: string
    
    constructor() {}
    
    public static getInstance(): AuthService {
        if (!AuthService.instance) {
        AuthService.instance = new AuthService()
        }
        return AuthService.instance
    }
    
    public static async getToken(): Promise<string> {
        if (!AuthService.token) {
        
        AuthService.token = API_KEY
        }
        return AuthService.token
    }
}

