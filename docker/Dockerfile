# Use official Playwright image (includes browsers and dependencies)
FROM mcr.microsoft.com/playwright:v1.36.0-focal

# Create app dir
WORKDIR /usr/src/app

# Copy package files first (for layer caching)
COPY package.json package-lock.json* ./

# Install node deps (including Playwright and allure-playwright)
RUN npm ci

# Optional: install allure commandline (for generating HTML in CI)
# Using a small wrapper: download latest allure commandline
RUN apt-get update && apt-get install -y wget unzip \
 && wget -qO /tmp/allure.zip "https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline/2.20.1/allure-commandline-2.20.1.zip" \
 && unzip /tmp/allure.zip -d /opt/ && rm /tmp/allure.zip \
 && ln -s /opt/allure-*/bin/allure /usr/bin/allure

# Copy test sources
COPY . .

# Ensure playwright browsers are installed (the base image should include them,
# but keep this to be explicit and for non-official base images)
RUN npx playwright install --with-deps

# Create results dir and set permissions (CI will mount or use this path)
RUN mkdir -p /usr/src/app/results && chown -R pwuser:pwuser /usr/src/app/results

# Switch to non-root user from base image (playwright image provides pwuser)
USER pwuser

# default command runs tests (can be overridden)
ENTRYPOINT ["npm", "run", "ci:test"]
