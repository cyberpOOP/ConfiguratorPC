import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({ colors }: Theme) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    padding: 10px;
`;
