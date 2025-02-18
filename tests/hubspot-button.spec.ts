import { test, expect } from "@playwright/test";

test("HubSpot homepage should have a button with the text Get a demo", async ({
  page,
}) => {
  // 1. Navigate to the HubSpot homepage
  await page.goto("https://www.hubspot.com/");

  // 2. find the Get a demo button
  const getADemoButton = await page.locator(
    "a.cl-button.-primary.-large.wf-page-header__cta.homepage-hero-cta"
  );

  // 3. Check if the button is visible
  await expect(getADemoButton).toBeVisible();
});

test("Clicking the Get a demo button should navigate to the correct page", async ({
  page,
}) => {
  // 1. Navigate to the HubSpot homepage
  await page.goto("https://www.hubspot.com/");

  // 2. Find the Get a demo button
  const getADemoButton = await page.locator(
    "a.cl-button.-primary.-large.wf-page-header__cta.homepage-hero-cta"
  );

  // 3. Click the Get a demo button
  await getADemoButton.click();

  // 4. Wait for the page to navigate
  await page.waitForLoadState("domcontentloaded");

  // 5. Check if the current URL is the expected one
  await expect(page).toHaveURL(/offers\.hubspot\.com\/crm-platform-demo/);

  const newUrl = page.url();

  await expect(newUrl).toContain("hubs_signup-url=www.hubspot.com");
  await expect(newUrl).toContain("hubs_signup-cta=homepage-hero-cta");
});
