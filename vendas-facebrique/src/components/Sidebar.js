/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Sidebar = () => (
  <aside css={aside}>
    <h1 css={titulo}>Lista</h1>
    <ul css={lista}>
      <li css={li}>Bicicleta</li>
      <li css={li}>Bicicleta</li>
      <li css={li}>Bicicleta</li>
      <li css={li}>Bicicleta</li>
      <li css={li}>Bicicleta</li>
      <li css={li}>Bicicleta</li>
    </ul>
  </aside>
);

const aside = css`
  background: #cebeaf;
  color: #000;
  height: 100vh;
  width: 300px;
`;

const titulo = css`
  margin: 0;
  padding: 0.5rem;
`;

const lista = css`
  margin: 0;
  list-style: none;
  padding: 0;
`;

const li = css`
  border-bottom: 1px solid #847370;
  padding: 0.5rem;
`;

export default Sidebar;
