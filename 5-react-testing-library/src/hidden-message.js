import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

function Fade(props) {
  return (
    <CSSTransition unmountOnExit timeout={1000} classNames="fade" {...props} />
  );
}

function HiddenMessage({ children }) {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((s) => !s);
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <Fade in={show}>
        <div>{children}</div>
      </Fade>
    </div>
  );
}

export { HiddenMessage };
