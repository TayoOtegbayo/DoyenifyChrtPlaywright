import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('heading', { name: 'Book Store Application' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'UserName' }).click();
  await page.getByRole('textbox', { name: 'UserName' }).fill('DoyenAcademy');
  await page.getByRole('textbox', { name: 'UserName' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password@1');
  await page.getByRole('button', { name: 'Login' }).click();
});