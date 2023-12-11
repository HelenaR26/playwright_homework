const { test, expect } = require('@playwright/test');

test('Search for clothing stores on Google with UK geolocation', async ({ page }) => {
  await page.goto('https://www.google.com')
  await page.fill('#APjFqb', 'clothing store')
  await page.press('#APjFqb', 'Enter')
  await page.waitForSelector('h3')
  const containsUK = await page.textContent('h3 >> text=UK', { timeout: 5000 })
  expect(containsUK).toBeTruthy()
})
