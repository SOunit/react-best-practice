// SFC: Single File Component

// 1. import layer
import { FC, useState } from "react";
import styled from "styled-components";

// 2. type layer
type Props = {
  className: string;
  handleClick: () => void;
  flag: boolean;
};
type ContainerProps = {} & Props;

// 3. DOM layer
// - stateless component
// - no logic
// - no react unique code like hook
// - easy test
const Component: FC<Props> = (props) => (
  <div className={props.className}>
    <button onClick={props.handleClick}>
      {props.flag ? "Click Me, flag on" : "Click me, flag off"}
    </button>
  </div>
);

// 4. style layer
const StyledComponent = styled(Component)`
  > button {
    color: blue;
  }
`;

// 5. container layer
// - stateful
export const Container: FC<ContainerProps> = (props) => {
  const [flag, setFlag] = useState(false);
  const handleClick = () => {
    setFlag((prevState) => !prevState);
  };

  return <StyledComponent {...props} flag={flag} handleClick={handleClick} />;
};
