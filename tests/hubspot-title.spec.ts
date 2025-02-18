import { test, expect } from "@playwright/test";

// async function testHubSpotTitle({page}) {
//    //...
// }

// const testHubSpotTitle = async ({page}) => {
//    //...
// }

test("name", async ({ page }) => {
  // body of the test
});

test("HubSpot homepage has correct title - approach 1", async ({ page }) => {
  // Navigate to the HubSpot homepage
  await page.goto("https://www.hubspot.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/HubSpot/);
});

test("HubSpot homepage has correct title - approach 2", async ({ page }) => {
  // Navigate to the HubSpot homepage
  await page.goto("https://www.hubspot.com/");

  const pageTitle = await page.title();

  await expect(pageTitle).toBe(
    "HubSpot | Software & Tools for your Business - Homepage"
  );
});
