import { styled } from "styled-components";
//animation
import { TransitionGroup, CSSTransition } from "react-transition-group";

const CasinoEffect = ({ className, count }) => {
  return (
    <TransitionGroup component={CasinoEffectStyled}>
      <CSSTransition classNames="animated-casino" timeout={250} key={count}>
        <span className={className}>{count}</span>
      </CSSTransition>
    </TransitionGroup>
  );
};

const CasinoEffectStyled = styled.div`
  position: relative;
  overflow: hidden;
  span {
    display: inline-block;
  }

  .animated-casino-enter {
    transform: translateY(100%);
  }

  .animated-casino-enter-active {
    transform: translateY(0%);
    transition: 0.25s ease-in-out;
  }
  .animated-casino-enter-done {
  }
  .animated-casino-exit {
    transform: translateY(0%);
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .animated-casino-exit-active {
    transition: 0.25s ease-in-out;
    transform: translateY(-100%);
  }
`;

export default CasinoEffect;
