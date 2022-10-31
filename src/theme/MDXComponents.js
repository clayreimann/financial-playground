import React from 'react';

import { Grid, Row, Col } from '../components/layout/grid.js';

// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

export default {
  ...MDXComponents, // Re-use the default mapping

  Grid,
  Row,
  Col,

};