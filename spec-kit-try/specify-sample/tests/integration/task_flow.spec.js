import { test, expect } from '@playwright/test'

test('can create and complete a task', async ({ page }) => {
  await page.goto('/')
  await page.getByLabel('タイトル').fill('買い物')
  await page.getByRole('button', { name: '追加' }).click()
  await expect(page.getByText('買い物')).toBeVisible()

  await page.getByRole('button', { name: '完了にする' }).click()
  await expect(page.getByText('完了')).toBeVisible()
})
