import * as React from 'react';
import { render } from 'react-testing-library';

import App from './App';

test('App Component renders with toggle switch', () => {
  const wrap = render(<App a="string" b={10} />);

  expect(wrap.getByTestId('nav')).toBeTruthy();
});
