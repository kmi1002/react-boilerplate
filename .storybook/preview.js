import { newViewports } from './helpers/ViewportHelper';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: { viewports: newViewports },
};
