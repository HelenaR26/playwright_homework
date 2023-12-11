const { test, expect } = require ('@playwright/test');

test.describe('Open Guru website', () => {
test('Search and open the link', async ({ page }) => {
  await page.goto('https://www.guru99.com/');
  await page.getByLabel('View Search Form').click();
  await page.getByPlaceholder('Search …').click();
  await page.getByPlaceholder('Search …').fill('test');
  await page.getByPlaceholder('Search …').press('Enter');
  await page.getByRole('link', { name: 'Software Testing Tutorial' }).click();
  await page.getByRole('heading', { name: 'Software Testing Training Summary' }).click();
  await page.getByTitle('What is Software Testing? Definition, Basics & Types').click();
  await page.getByLabel('Expand Table of Contents').click();
  await page.getByRole('link', { name: 'Why Software Testing is Important?' }).click();
  await page.getByRole('heading', { name: 'Why Software Testing is Important?' }).click();
});

test('Search and change sorting of results', async ({ page }) => {
    await page.goto('https://www.guru99.com/');
    await page.getByLabel('View Search Form').click();
    await page.getByPlaceholder('Search …').click();
    await page.getByPlaceholder('Search …').fill('web');
    await page.getByPlaceholder('Search …').press('Enter');
    await page.locator('.gsc-option-selector').click();
    await page.getByText('Date').click();
    await page.locator('div:nth-child(8)').first().click();
    await page.getByRole('link', { name: 'ASP.NET Web Forms Tutorial: User Controls Examples' }).click();
    await page.getByRole('heading', { name: 'ASP.NET Web Forms Tutorial: User Controls Examples' }).click();
  });

  test('Change language, search and open the link', async ({ page }) => {
    await page.goto('https://www.guru99.com/');
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
    await page.getByRole('link', { name: 'en English' }).click();
    await page.getByRole('link', { name: 'de German' }).click();
    await page.getByLabel('Suchformular anzeigen').click();
    await page.getByPlaceholder('Suche …').click();
    await page.getByPlaceholder('Suche …').fill('test');
    await page.getByRole('button', { name: 'Suche', exact: true }).click();
    await page.getByRole('link', { name: 'de German' }).click();
    await page.getByRole('link', { name: 'en English' }).click();
    await page.getByText('Sep 23, 2023 ... Software Testing Training Summary. In this free QA Course, you ').click();
    await page.getByRole('link', { name: 'Software Testing Tutorial' }).click();
    await page.getByRole('heading', { name: 'Software Testing Tutorial' }).click();
    await page.getByRole('link', { name: 'Home' }).click();
  });
})
