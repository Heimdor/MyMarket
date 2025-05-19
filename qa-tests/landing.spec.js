// tests/landing.spec.ts
import { test, expect } from "@playwright/test";

test("landing page for guest users", async ({ page }) => {
  await page.goto("http://localhost:9000/");

  // Проверяем заголовок
  const title = page.locator("h1");
  await expect(title).toHaveText(/добро пожаловать/i);

  // Проверяем подзаголовок
  await expect(page.locator("text=Ваш магазин фэнтези товаров")).toBeVisible();
  // Проверяем наличие изображения
  await expect(page.locator('img[alt="Fantasy landscape"]')).toBeVisible();
  await page.pause();
  // Проверяем наличие кнопки "Войти"
const loginButton = page.locator('button:has-text("Войти")');
  // Проверяем, что кнопки "Каталог" и "Профиль" не отображаются
  await expect(page.locator("text=Перейти в каталог")).toHaveCount(0);
  await expect(page.locator("text=Мой профиль")).toHaveCount(0);

  // Проверка CTA-блока
  const cta = page.locator(".cta-section");
  await expect(cta).toContainText("Готовы начать приключение?");
  await expect(cta.locator("text=Войти в аккаунт")).toBeVisible();
});
