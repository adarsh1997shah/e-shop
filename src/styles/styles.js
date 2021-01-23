import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  padding: 20px;
  overflow-x: auto;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const BaseListStyle = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  li {
    flex-basis: calc(25% - 20px);
    margin: 15px 10px;
    border-radius: 5px;
    transform: translateY(0px);
    transition: transform 0.2s ease;

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
      flex-basis: calc(50% - 20px) !important;
    }
  }

  @media (max-width: 500px) {
    li {
      flex-basis: 100% !important;
    }
  }
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
