import { test, expect } from '@playwright/test';

let counter = 0;

test('deliberately flaky test', async ({}, testInfo) => {
  counter++;
  console.log(`[flaky] run #${counter}`);
  testInfo.attach('run-number', { body: `run #${counter}`, contentType: 'text/plain' });

  // fail every other run
  const shouldFail = counter % 2 === 0;
  if (shouldFail) {
    console.log('[flaky] failing intentionally');
    expect(false).toBe(true);
  } else {
    console.log('[flaky] passing');
    expect(true).toBe(true);
  }
});
