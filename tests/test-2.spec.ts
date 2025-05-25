import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('div').filter({ hasText: /^Book Store Application$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'UserName' }).click();
  await page.getByRole('textbox', { name: 'UserName' }).fill('DoyenifyAcademu');
  await page.getByRole('textbox', { name: 'UserName' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password');

});