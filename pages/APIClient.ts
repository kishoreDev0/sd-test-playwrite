import { APIRequestContext, request, APIResponse } from '@playwright/test';

export class APIClient {
  private requestContext: APIRequestContext;
  
  constructor(private baseUrl: string, private headers: Record<string, string> = {}) {}

  async init() {
    this.requestContext = await request.newContext({
      baseURL: this.baseUrl,
      extraHTTPHeaders: this.headers,
    });
  }


  async get(endpoint: string): Promise<APIResponse> {
    return await this.requestContext.get(endpoint);
  }

  async post(endpoint: string, data: Record<string, any>): Promise<APIResponse> {
    return await this.requestContext.post(endpoint, { data });
  }

  async dispose() {
    await this.requestContext.dispose();
  }
}
