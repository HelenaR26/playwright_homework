import { test as setup } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ request }) => {
  // Send authentication request
  await request.post('http://5.189.186.217/api/auth/login', {
    body: {
      'email': 'email@elena.com',
      'password': 'Test_12345'
    }
  });
  await request.storageState({ path: authFile });
});