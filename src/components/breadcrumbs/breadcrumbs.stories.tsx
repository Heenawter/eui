/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import type { EuiBreadcrumbsProps } from './types';
import { EuiBreadcrumbs } from './breadcrumbs';

const meta: Meta<EuiBreadcrumbsProps> = {
  title: 'Navigation/EuiBreadcrumbs',
  component: EuiBreadcrumbs,
  args: {
    // Component defaults
    type: 'page',
    max: 5,
    truncate: true,
    responsive: { xs: 1, s: 2, m: 4 },
    lastBreadcrumbIsCurrentPage: true,
  },
};

export default meta;
type Story = StoryObj<EuiBreadcrumbsProps>;

export const Playground: Story = {
  args: {
    breadcrumbs: [
      {
        text: 'Breadcrumb 1',
        href: '#',
      },
      {
        text: 'Breadcrumb 2',
        onClick: action('onClick'),
      },
      {
        text: 'Breadcrumb 3',
        href: '#',
      },
      {
        text: 'Breadcrumb 4',
      },
      {
        text: 'Current',
      },
    ],
  },
};
