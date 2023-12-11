const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'serial' })
test.describe('Open Guru website', () => {
    test.beforeEach(async({ page }) => {
        await page.goto('https://www.guru99.com/')
    })
    test('test5', async({ page }) => {
        const input = page.locator('input.gsc-input')
        await page.mouse.move(500, 500)
        await page.locator('div.g-content').screenshot({ path: 'screenshots/header_with_search.png' })
        await expect(page).toHaveScreenshot('screenshots_main_page_snapshot.png')
        await input.click()
        await input.fill('sap')
        await page.screenshot({ path: 'screenshots/sap_in_search_input_false.png', fullPage: false })
        await input.clear()
        await input.pressSequentially('SAP')
        await input.pressSequentially('Tutorial', { delay: 200 })
    })
})