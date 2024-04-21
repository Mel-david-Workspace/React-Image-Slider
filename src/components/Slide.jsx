/** @jsx jsx */
import React, { memo } from 'react';
import { css, jsx } from '@emotion/core';

const Slide = ({ content, width }) => {
  return (
    <div
      css={css`
        height: 100%;
        width: ${width}px;
        background-image: url('${content}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
    />
  );
};

export default memo(Slide);
