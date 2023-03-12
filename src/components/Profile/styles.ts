import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    height: 13.25rem;
    background-color: ${props => props.theme['Profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 1.3rem 2.6rem;

    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 8px;
        margin-right: 2rem;
    }
`;

export const InfoProfile = styled.div`
    height: 9.25rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    p {
        color: ${props => props.theme['Text']};
        line-height: 1.12rem;
    }

    section {     
        span {
            margin-right: 1.62rem;
            color: ${props => props.theme['Text']};
            opacity: 1;
        }
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 1.9rem;
        color: ${props => props.theme['Title']};
    }

    span {
        align-items: center;
        width: 4.5rem;

        a {
            display: flex;
            flex-direction: row;
            align-items:  center;
            justify-content: space-between;

            text-transform: uppercase;
            text-decoration: none;
            color: ${props => props.theme['Blue']};
            font-weight: bold;
            font-size: 0.75rem;
            opacity: 0.8;

            &:hover {
                opacity: 1;
                transition: opacity 0.2s;
            }
        }
    }
`