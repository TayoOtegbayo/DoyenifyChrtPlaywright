import { test, expect } from "@playwright/test";

test.describe("playwright project", () => {
  test("visit page", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await expect(page).toHaveTitle("DEMOQA");
    await page.getByText("Book Store Application").click();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
    await expect(page).toHaveURL("https://demoqa.com/books");
    await page.getByRole("button", { name: "Login" }).click();
    await page
      .getByRole("textbox", { name: "UserName" })
      .fill("DoyenAutomation");
    await page.getByRole("textbox", { name: "Password" }).fill('Password@1')
    await page.getByRole("button", { name: "Login" }).click();
  
  });
});
