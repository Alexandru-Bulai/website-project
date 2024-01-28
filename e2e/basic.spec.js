// @ts-check
import { test, expect } from '@playwright/test'

test.describe('homepage', () => {
  test('Basic checks for this page', async ({ page }) => {
    await page.goto('/home.html')

    const mainMenu = page.locator('#navBar > a')
    // Expecting to have 4 items in the main menu
    await expect(mainMenu).toHaveCount(4)

    // Gallery Menu Item should work
    for (const menuItem of await mainMenu.all()) {
      if ((await menuItem.innerText()).includes('Gallery')) {
        menuItem.click()
        await expect(page).toHaveURL(/.*gallery/)
        break
      }
    }
  })
})
