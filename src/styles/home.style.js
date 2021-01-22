import styled from 'styled-components';
import { BaseListStyle } from './styles';

export const HomeLayout = styled(BaseListStyle)`
  li {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
    height: 150px;

    a {
      display: flex;
      flex-direction: column;
      padding: 10px;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-decoration: none;

      span {
        margin-top: 10px;
        text-align: center;
      }
    }
  }
`;
