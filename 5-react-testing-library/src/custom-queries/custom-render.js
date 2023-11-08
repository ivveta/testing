import { render, queries, within, RenderOptions } from '@testing-library/react';

import * as customQueries from './custom-queries';
import { ReactElement } from 'react';

const allQueries = {
  ...queries,
  ...customQueries,
};

export const customRender = (ui, options) =>
  render(ui, { queries: allQueries, ...options });
