import styled from "styled-components";

export const Page = styled.main`
  position: relative;
  z-index: 2;
  max-width: 112rem;
  margin: 0 auto;
  padding: 14rem 2rem 6rem;
  color: #fff;

  .back {
    display: inline-block;
    margin-bottom: 2.4rem;
    color: var(--green);
    font-weight: 700;
    font-size: 1.5rem;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }

  .head {
    margin-bottom: 3.2rem;
    .category {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--green);
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
    h1 {
      font-size: 4.2rem;
      margin: 0.8rem 0 1.6rem;
      line-height: 1.2;
    }
    .lead {
      max-width: 80rem;
      margin-bottom: 2.4rem;
      color: rgba(255, 255, 255, 0.75);
    }
    .visit {
      display: inline-block;
      padding: 0.8rem 1.8rem;
      border-radius: 2rem;
      background: var(--green);
      color: #000;
      font-weight: 700;
      font-size: 1.4rem;
      text-decoration: none;
    }
  }

  .gallery {
    margin-bottom: 3.2rem;
    .stage {
      position: relative;
      background: #0b1120;
      border-radius: 1.2rem;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      aspect-ratio: 16 / 10;
      img {
        max-width: 100%;
        max-height: 100%;
        display: block;
      }
    }
    .stage.mobile img {
      padding: 1.6rem 0;
    }
    .nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 4.4rem;
      height: 4.4rem;
      border-radius: 50%;
      border: none;
      background: rgba(0, 0, 0, 0.55);
      color: #fff;
      font-size: 3rem;
      line-height: 1;
      cursor: pointer;
      &:hover {
        background: var(--green);
        color: #000;
      }
    }
    .prev { left: 1.2rem; }
    .next { right: 1.2rem; }
    .caption {
      margin: 1.2rem 0;
      font-size: 1.4rem;
      color: rgba(255, 255, 255, 0.7);
      span { color: rgba(255, 255, 255, 0.45); }
    }
    .thumbs {
      display: flex;
      gap: 0.8rem;
      overflow-x: auto;
      padding-bottom: 0.4rem;
    }
    .thumb {
      flex: 0 0 9.6rem;
      height: 6rem;
      padding: 0;
      border-radius: 0.8rem;
      overflow: hidden;
      border: 2px solid transparent;
      background: #0b1120;
      cursor: pointer;
      opacity: 0.6;
      transition: 0.2s;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
      }
      &.active, &:hover {
        opacity: 1;
        border-color: var(--green);
      }
    }
  }

  .columns {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 4rem;
  }

  h2 {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.12rem;
    color: var(--green);
    margin: 2.4rem 0 1rem;
    &:first-child { margin-top: 0; }
  }

  p {
    font-size: 1.6rem;
    line-height: 1.7;
    letter-spacing: 0.05rem;
    color: rgba(255, 255, 255, 0.85);
  }

  .bullets {
    list-style: none;
    padding: 0;
    li {
      position: relative;
      padding-left: 2rem;
      margin-bottom: 1rem;
      font-size: 1.55rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.85);
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.85rem;
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
        background: var(--green);
      }
    }
  }

  .highlights li {
    background: rgba(35, 206, 107, 0.08);
    border-radius: 0.8rem;
    padding: 1rem 1.2rem 1rem 3rem;
    &::before { left: 1.2rem; top: 1.75rem; }
  }

  .stack {
    margin-bottom: 1.4rem;
    span {
      display: block;
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.55);
      margin-bottom: 0.6rem;
    }
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    font-size: 1.3rem;
    li {
      padding: 0.4rem 1rem;
      border-radius: 2rem;
      background-color: rgba(35, 206, 107, 0.12);
      color: var(--green);
    }
  }

  .pager {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 6rem;
    padding-top: 3rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    a {
      display: block;
      padding: 2rem 2.4rem;
      border-radius: 1.2rem;
      background: #2b2b2b;
      color: inherit;
      text-decoration: none;
      font-size: 1.7rem;
      font-weight: 600;
      line-height: 1.4;
      border: 1px solid transparent;
      transition: 0.25s;
      span {
        display: block;
        margin-bottom: 0.6rem;
        font-size: 1.3rem;
        color: var(--green);
        text-transform: uppercase;
        letter-spacing: 0.1rem;
      }
      &:hover { border-color: var(--green); transform: translateY(-3px); }
    }
    .next-project { text-align: right; }
  }

  html.light & {
    color: var(--black);
    .head .lead, p, .bullets li { color: #333; }
    .pager { border-color: rgba(0, 0, 0, 0.1); a { background: #f1f1f1; } }
    .gallery .caption { color: #555; span { color: #888; } }
    .stack span { color: #777; }
  }

  @media (max-width: 860px) {
    padding: 11rem 1.8rem 4rem;
    .head h1 { font-size: 2.8rem; }
    .pager { grid-template-columns: 1fr; .next-project { text-align: left; } }
    .columns { grid-template-columns: 1fr; gap: 0; }
    aside { margin-top: 2.4rem; }
  }
`
