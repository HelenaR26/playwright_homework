const { test, expect } = require("@playwright/test");
const { MainPageNewborn } = require("./pages/mainPageNewborn");

test.describe.configure({ mode: "serial" });

test.describe.skip("Verification steps for newborn website", () => {
  const USER = {
    email: "email@elena.com",
    password: "Test_12345",
    token: "",
  };
  test.beforeAll(async ({ request }) => {
    const response = await request.post("/api/auth/login", {
      data: {
        email: USER.email,
        password: USER.password,
      },
      headers: { "Content-Type": "application/json" },
    });
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toHaveProperty("token");
    USER.token = body.token;
    console.log("AUTH", USER.token);
  });

  test.beforeEach(async ({ page }) => {
    page.addInitScript((value) => {
      window.localStorage.setItem("auth-token", value);
    }, USER.token);
    await page.goto("/overview");
  });

  test.skip("Check the state after open the page", async ({ page }) => {
    await expect(page.locator("span.card-title").nth(0)).toBeVisible();
    await expect(page.locator("div.row span.card-title").nth(0)).toContainText(
      "Виручка:"
    );
  });

  test.skip("Usage POM", async ({ page }) => {
    const mainPageNewBorn = new MainPageNewborn(page);
    await mainPageNewBorn.verifyLogoutVisible();
  });

  test("Without POM", async ({ page }) => {
    await expect(page.locator("ul > li.bold.last > a")).toHaveText("Вийти");
  });
});