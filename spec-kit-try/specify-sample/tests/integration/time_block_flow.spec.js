import { test, expect } from '@playwright/test'

test('can create and edit a time block', async ({ page }) => {
  await page.goto('/')
  await page.getByLabel('タイトル').fill('集中作業')
  await page
    .locator('form', { hasText: 'タスクを追加' })
    .getByRole('button', { name: '追加' })
    .click()

  await page.getByLabel('タスク').selectOption({ label: '集中作業' })
  await page.getByLabel('開始').fill('09:00')
  await page.getByLabel('終了').fill('10:00')
  await page
    .locator('form', { hasText: 'タイムブロック' })
    .getByRole('button', { name: '追加' })
    .click()

  await expect(page.getByText('09:00 - 10:00')).toBeVisible()
  await page.getByRole('button', { name: '編集' }).click()
  const editor = page.locator('.time-block-item')
  await editor.getByLabel('開始').fill('09:30')
  await page.getByRole('button', { name: '保存' }).click()
  await expect(page.getByText('09:30 - 10:00')).toBeVisible()
})
