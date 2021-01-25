import styled from 'styled-components';
import { BaseListStyle } from './styles';

export const FilterList = styled(BaseListStyle)`
  li {
    margin-top: 10px;
    font-size: 14px;

    label {
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        margin-left: 5px;
      }
    }

    &:hover {
      transform: translateY(0px);
    }
  }
`;

export const ProductWrapper = styled.div`
  margin-top: 50px;
`;

export const ProductList = styled(BaseListStyle)`
  .product-list-none {
    margin: 15px 10px;
  }

  li {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
    height: auto;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      height: 250px;
      object-fit: contain;
      cursor: pointer;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      padding: 10px 0;

      &:hover {
        filter: grayscale(0%);
      }
    }

    div {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex: 1;

      h2 {
        margin-bottom: 5px;
      }

      h3 {
        margin-bottom: 5px;
      }

      p.instock {
        color: green;
        margin-bottom: 15px;
      }

      p.outstock {
        color: red;
        margin-bottom: 15px;
      }

      button {
        margin-top: auto;
        padding: 5px;
        background-color: white;
        border: 1px solid orange;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: orange;
          color: white;
        }
      }
    }

    &:hover {
      transform: translateY(0px);
    }
  }
`;
