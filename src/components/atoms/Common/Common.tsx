import { css } from '@emotion/react';
import { Empty, Result } from 'antd';
import React from 'react';
export function CommonTableEmpty({
  isError,
  size = 'large',
}: {
  isError: boolean;
  size?: 'small' | 'large';
}): JSX.Element {
  return isError ? (
    <Result css={commonTableEmptyStyle({ size })} title="Failed to response data" status="warning" />
  ) : (
    <Empty description="No Data" />
  );
}

const commonTableEmptyStyle = ({ size }: { size: 'small' | 'large' }) => css`
  ${size === 'small' &&
  css`
    .ant-result-icon {
      .anticon {
        font-size: 2rem;
      }
    }
    .ant-result-title {
      font-size: 1rem;
    }
  `}
`;
