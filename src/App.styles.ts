import styled from 'styled-components'

export const Container = styled.div`
 @media (max-width: 768px) {
    min-width: 100vw;
  }
`

export const Header = styled.div`
  background-color: darkblue;
  height: 150px;
  text-align: center;
  @media (max-width: 768px) {
    min-width: 100vw;
    margin-left: 1.85rem;
  }
`

export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  padding-top: 30px;
`

export const Body = styled.div`
  margin: auto;
  max-width: 980px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    min-width: 100vw;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 2rem;
  }
`
