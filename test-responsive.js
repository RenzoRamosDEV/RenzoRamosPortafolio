import { chromium } from 'playwright';

const browser = await chromium.launch();
const context = await browser.createContext();
const page = await context.newPage();

// Test desktop view (full width)
await page.setViewportSize({ width: 1280, height: 800 });
await page.goto('http://localhost:8000');
await page.screenshot({ path: 'screenshot-desktop.png' });
console.log('✓ Desktop screenshot (1280px) saved');

// Test mobile view (720px)
await page.setViewportSize({ width: 720, height: 800 });
await page.goto('http://localhost:8000');
await page.screenshot({ path: 'screenshot-mobile-720.png' });
console.log('✓ Mobile screenshot (720px) saved');

// Test small mobile view (375px)
await page.setViewportSize({ width: 375, height: 800 });
await page.goto('http://localhost:8000');
await page.screenshot({ path: 'screenshot-mobile-375.png' });
console.log('✓ Mobile screenshot (375px) saved');

await browser.close();
console.log('✓ Screenshots complete!');
