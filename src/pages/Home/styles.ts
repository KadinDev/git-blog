import styled from "styled-components"

export const Container = styled.section`
    max-width: 54rem;
    margin-left: calc(50% - 54rem/2);
    flex-direction: column;
    position: relative;
    margin-top: -3.5rem;
`;

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    gap: 2rem;
`;


export const SearchForm = styled.form`
  width: 100%;

  & div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    & p {
      color: ${({ theme }) => theme.colors["base-span"]};
      font-size: ${({ theme }) => theme.fonts.sizes.small2};
    }

    & h4 {
      color: ${({ theme }) => theme.colors["base-title"]};
      font-size: ${({ theme }) => theme.fonts.sizes.medium};
    }
  }

  & input {
    width: 100%;
    border-radius: 6px;
    padding: 1rem 2rem;
    color: ${({ theme }) => theme.colors["base-title"]};
    background-color: ${({ theme }) => theme.colors["base-input"]};
    border: 1px solid ${({ theme }) => theme.colors["base-border"]};
    font-size: ${({ theme }) => theme.fonts.sizes.small3};

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-border"]};
    }
  }

  margin-bottom: 4rem;
`;