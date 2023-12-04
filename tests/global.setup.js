// const { test as setup, expect } = require('@playwright/test')
import { test as setup, expect } from '@playwright/test'
import { STORAGE_STATE } from '../playwright.config'
const authFile = 'playwright/.auth/user.json';

setup('make login', async({ page }) => {
    await page.goto('/login')
    await page.getByLabel('Email:').fill('email@elena.com')
    await page.getByLabel('Пароль:').fill('Test_12345')
    await page.locator("button[type='submit']").click()

    // await expect(page.locator('span.card-title').nth(0)).toBeVisible()
    await expect(page.locator('body > app-root > app-site-layout > ul > li.bold.last > a')).toBeVisible()
    // await expect(page.locator('ul > li.bold.last > a')).toHaveText('Вийти')
    await page.context().storageState({ path: authFile })
})