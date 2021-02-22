import styled from "styled-components";

interface ExpCurrentProps {
  left: string;
}

interface ExpBarProps {
  width: string;
}

export const Container = styled.section`
  display: flex;
  align-items: center;

  > span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;

    border-radius: 4px;
    background: var(--gray-line);

    margin: 0 1.5rem;
    position: relative;
  }
`;

export const ExpBar = styled.section<ExpBarProps>`
  height: 4px;
  width: ${({ width }) => width};

  border-radius: 4px;

  background: var(--green);
`;

export const ExpCurrent = styled.section<ExpCurrentProps>`
  position: absolute;
  top: 12px;
  left: ${({ left }) => left};

  transform: translateX(-50%);
`;
