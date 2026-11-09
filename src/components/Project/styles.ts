import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: auto;
    gap: 2.4rem;
    padding: 1rem;

    .featured-wrapper{
      grid-column: 1 / -1;
    }

    .project{
      background-color: #2b2b2b;
      border: 1px solid transparent;
      border-radius: 1.2rem;
      overflow: hidden;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        border-color: var(--green);
        box-shadow: 0 1rem 3rem rgba(35, 206, 107, 0.15);
      }

      .media{
        position: relative;
        aspect-ratio: 16 / 9;
        background-color: #0b1120;
        border: none;
        padding: 0;
        width: 100%;
        display: block;
        cursor: pointer;
        overflow: hidden;
        .media-hint{
          position: absolute;
          right: 1.2rem;
          bottom: 1.2rem;
          padding: 0.6rem 1.4rem;
          border-radius: 2rem;
          background: var(--green);
          color: #000;
          font-weight: 700;
          font-size: 1.3rem;
          opacity: 0;
          transform: translateY(0.6rem);
          transition: 0.25s;
        }
        &:hover .media-hint, &:focus-visible .media-hint{
          opacity: 1;
          transform: none;
        }
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      }

      .media.placeholder{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.4rem;
        aspect-ratio: 21 / 9;
        background: linear-gradient(135deg, #1b3a2a 0%, #0b1120 60%, #12233f 100%);
        img{
          width: 5.6rem;
          height: 5.6rem;
          object-fit: contain;
        }
      }

      .content{
        padding: 2rem 1.8rem;
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1.2rem;
        .category{
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--green);
          text-transform: uppercase;
          letter-spacing: 0.1rem;
        }
        a > img {
          width: 2.6rem;
        }
      }

      h3{
        margin-bottom: 1.6rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
      }

      footer{
        margin-top: auto;
        .details-btn{
          display: inline-block;
          text-decoration: none;
          margin-top: 1.8rem;
          padding: 0;
          border: none;
          background: none;
          color: var(--green);
          font-weight: 700;
          font-size: 1.5rem;
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
        }
        .tech-list{
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.8rem;
          font-size: 1.3rem;
          li{
            padding: 0.4rem 1rem;
            border-radius: 2rem;
            background-color: rgba(35, 206, 107, 0.12);
            color: var(--green);
          }
        }
      }
    }

    .project.featured{
      flex-direction: row;
      .media{
        flex: 0 0 55%;
        aspect-ratio: auto;
        min-height: 32rem;
        display: flex;
        align-items: center;
        img{
          object-fit: contain;
        }
      }
      .content{
        padding: 3rem;
      }
      h3{
        font-size: 2.6rem;
      }
    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: repeat(2, minmax(0, 1fr));
      .project.featured{
        flex-direction: column;
        .media{
          flex: none;
          aspect-ratio: 16 / 9;
          min-height: 0;
        }
      }
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
      .project.featured{
        .content{
          padding: 2rem 1.8rem;
        }
        h3{
          font-size: 2.2rem;
        }
      }
    }
  }
`
