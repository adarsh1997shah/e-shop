import styled from 'styled-components';

export const NavBar = styled.div`
  height: 70px;

  ul {
    list-style: none;
    height: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);

    li {
      text-decoration: none;
      padding: 10px;

      .selected {
        text-decoration: underline;
      }

      a {
        text-decoration: none;
        font-size: 20px;
        color: black;

        &:hover {
          text-decoration: underline;
        }

        span {
          display: inline-block;
          margin-left: 10px;
          border-radius: 50%;
          border: 1px solid black;
          text-align: center;
          width: 24px;
        }
      }
    }
  }
`;
