import styled from 'styled-components';

export const CartTable = styled.table`
  width: 80%;
  white-space: nowrap;
  margin: auto;
  border-spacing: 0;

  th {
    padding: 10px;
    font-size: 18px;
  }

  td {
    font-size: 15px;
    padding: 10px;
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.3);

    span {
      margin: 0 8px;
    }

    .quantity-control {
      padding: 0 5px;
      border-radius: 3px;
      cursor: pointer;
    }

    .increase {
      background-color: white;
      border: 1px solid green;

      &:hover {
        background-color: green;
        color: white;
      }
    }

    .decrease {
      background-color: white;
      border: 1px solid red;

      &:hover {
        background-color: red;
        color: white;
      }
    }

    .remove-cart-product {
      display: block;
      width: 100%;
      padding: 5px;
      border-radius: 3px;
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

  tr:last-child {
    td {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`;
