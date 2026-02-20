import { test, expect } from '@playwright/test'

test('can adjust day plan', async ({ page }) => {
  await page.goto('/')
  await page.getByLabel('タイトル').fill('レビュー')
  await page.getByRole('button', { name: '追加' }).click()

  await page.getByLabel('タスク').selectOption({ label: 'レビュー' })
  await page.getByLabel('開始').fill('13:00')
  await page.getByLabel('終了').fill('14:00')
  await page.getByRole('button', { name: '追加' }).click()

  await page.getByRole('button', { name: '編集' }).click()
  await page.getByLabel('開始').fill('14:30')
  await page.getByLabel('終了').fill('15:00')
  await page.getByRole('button', { name: '保存' }).click()
  await expect(page.getByText('14:30 - 15:00')).toBeVisible()
})
