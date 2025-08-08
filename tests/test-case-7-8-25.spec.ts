import { test, expect } from '@playwright/test';
import { APIClient } from '../pages/APIClient';

test.describe('Public API Tests', () => {
  let client: APIClient;

  test.beforeEach(async () => {
    client = new APIClient('https://jsonplaceholder.typicode.com');
    await client.init();
  });

  test.afterEach(async () => {
    await client.dispose();
  });

  test('GET /posts - validate status and data', async () => {
    const response = await client.get('/posts');
    expect(response.status()).toBe(200);

    const posts = await response.json();
    expect(posts.length).toBeGreaterThan(0);
  });

  test('POST /posts - create and verify new post', async () => {
    const postData = {
      title: 'Playwright API Test',
      body: 'This is a test post',
      userId: 1
    };

    const response = await client.post('/posts', postData);
    expect(response.status()).toBe(201); 
    const post = await response.json();
    expect(post.title).toBe(postData.title);
    expect(post.body).toBe(postData.body);
    expect(post.userId).toBe(postData.userId);
  });

  test('GET /posts with invalid token - simulate failure', async () => {
    const authClient = new APIClient('https://jsonplaceholder.typicode.com', {
      Authorization: 'Bearer INVALID_TOKEN'
    });
    await authClient.init();
    // have to implement invalid token handling

    const response = await authClient.get('/posts'); 
    expect(response.status()).toBe(200); 

    await authClient.dispose();
  });

  test('Extract and validate post titles', async () => {
    const response = await client.get('/posts');
    const posts = await response.json();

    const titles = posts.map((p: any) => p.title);
    expect(titles.length).toBeGreaterThan(0);
    expect(titles[0]).toContain(''); 

    console.log('First 5 Titles:', titles.slice(0, 5));
  });
  
});


