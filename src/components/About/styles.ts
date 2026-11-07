import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  .about-text > div > p{
    max-width: 90rem;
  }

  .skill-group{
    margin-top: 2.4rem;
    h4{
      font-size: 1.6rem;
      text-transform: uppercase;
      letter-spacing: 0.15rem;
      opacity: 0.8;
      margin-bottom: 0.4rem;
    }
  }

  .chip{
    padding: 0.6rem 1.4rem;
    border-radius: 2rem;
    border: 1px solid var(--green);
    color: var(--green);
    font-size: 1.4rem;
    font-weight: 700;
  }

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 0.6rem;
    min-width: 6.4rem;

    img{
      width: 3.4rem;
      height: 3.4rem;
    }
    span{
      font-size: 1.2rem;
      opacity: 0.8;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 75%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
    
    
  }

`