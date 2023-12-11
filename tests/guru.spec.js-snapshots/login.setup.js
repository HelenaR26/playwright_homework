import { test as setup, expect } from "@playwright/test";
import { STORAGE_STATE } from "../playwright.config";

setup("make login", async ({ page }) => {
  await page.goto("http://5.189.186.217/login");
  await page.getByLabel("Email:").fill("email@elena.com");
  await page.getByLabel("Пароль:").fill("Test_12345");
  await page.locator("button[type='submit']").click();

  await expect(page.locator("span.card-title").nth(0)).toBeVisible();
  await page.context().storageState({ path: STORAGE_STATE });
});