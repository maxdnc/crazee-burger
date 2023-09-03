import styled from "styled-components";
import { theme } from "../../theme";
import { devices } from "../../enums/devices";

export default function ToggleButton({ isChecked, onToggle, icon, onClick }) {
  return (
    <ToggleButtonStyled>
      <button onClick={onClick}>{icon}</button>
      <div className="btn-wrap">
        <input
          type="checkbox"
          className="toggle"
          id="rounded"
          checked={isChecked}
          onChange={onToggle}
        />
      </div>
    </ToggleButtonStyled>
  );
}

const ToggleButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  gap: 1rem;

  button {
    background: none;
    cursor: pointer;
    border: none;
    padding: unset;
    font-size: 1.5rem;
    color: ${theme.colors.primary};
    @media ${devices.sm} {
      font-size: 1.2rem;
    }
  }
  .btn-wrap {
    position: relative;
    background: ${theme.colors.greySemiMedium};
    width: 60px;
    height: 30px;
    border-radius: 100vh;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${devices.sm} {
      display: none;
    }

    &::before {
      content: "";
      position: absolute;
      inset-block: 0;
      left: 0%;
      top: 50%;
      transform: translate(0%, -50%);
      width: 30px;
      height: 30px;
      border-radius: 100vh;
      background: ${theme.colors.greyBlue};
      transition: all 0.2s ease;
    }

    &:has(input[type="checkbox"]:checked) {
      background: ${theme.colors.primary};

      &::before {
        transform: translate(100%, -50%);
      }
    }

    input[type="checkbox"] {
      opacity: 0;
      position: absolute;
      inset: 0;
      cursor: pointer;
    }
  }
`;
