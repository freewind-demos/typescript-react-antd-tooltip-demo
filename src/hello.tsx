import { Button, Tooltip } from 'antd';
import React from 'react';

export default function Hello() {
  return <Tooltip title={'Hello tooltip'}>
    <Button>Hello</Button>
  </Tooltip>
};
