/// <reference types="jest" />

import type { TestRunnerConfig } from '@storybook/test-runner';

const config: TestRunnerConfig = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async postVisit(page, _context) {
    const elementHandler = await page.$('#storybook-root');
    const innerHTML = await elementHandler?.innerHTML();
    expect(innerHTML).toMatchSnapshot();
  },
};

export default config;
