import styled from 'styled-components';

export const HomeLayout = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  li {
    flex-basis: calc(25% - 20px);
    height: 150px;
    margin: 15px 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
    transform: translateY(0px);
    transition: transform 0.2s ease;

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

    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 900px) {
    li {
      flex-basis: calc(33.33% - 20px);
    }
  }

  @media (max-width: 700px) {
    li {
      flex-basis: calc(50% - 20px);
    }
  }

  @media (max-width: 500px) {
    li {
      flex-basis: 100%;
    }
  }
`;
