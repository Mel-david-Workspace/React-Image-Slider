/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const SliderContent = ({ translate, transition, width, children }) => (
  <div
    css={css`
      transform: translateX(-${translate}px);
      transition: transform ease-out ${transition}s;
      height: 100%;
      width: ${width}px;
      display: flex;
    `}
  >
    {children}
  </div>
);

export default SliderContent;
