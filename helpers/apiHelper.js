import { request, expect } from "@playwright/test";

exports.ApiHelper = class ApiHelper {
    async getToken(data) {
        const response = await playwright.request('/api/auth/login', {
            data,
            headers: {
                "Content-Type": "application/json",
            }
        })
        expect(response.ok()).toBeTruthy()
        const serializeResponse = await response.json()
        expect(serializeResponse).toHaveProperty("token")
        return serializeResponse.token
}
}