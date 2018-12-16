import * as React from 'react';
import { render } from 'react-dom';

import App from './App/App';

const appRoot = document.getElementById('root');

render(<App a="string" b={10} />, appRoot);

// @types/jest
// concurrently
// husky
// jest
// react-test-renderer
// react-testing-library
// ts-jest
