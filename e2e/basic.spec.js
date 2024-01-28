// @ts-check
import { test, expect } from '@playwright/test';

test("Basic checks for project", async ({ page }) => {
    await page.goto('/home.html');

    await expect(page).toHaveTitle('Pet Care');
});