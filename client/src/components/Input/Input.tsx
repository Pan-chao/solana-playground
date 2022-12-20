import { ComponentPropsWithoutRef, FocusEvent, forwardRef } from "react";
import styled, { css } from "styled-components";

import { ClassName } from "../../constants";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <StyledInput ref={ref} {...defaultInputProps} {...props}>
    {props.children}
  </StyledInput>
));

const StyledInput = styled.input<InputProps>`
  ${({ theme, fullWidth }) => css`
    background-color: ${theme.colors.input?.bg};
    border: 1px solid ${theme.colors.input?.borderColor};
    color: ${theme.colors.input?.color};
    border-radius: ${theme.borderRadius};
    padding: 0.25rem 0.5rem;
    width: ${fullWidth && "100%"};

    &:focus,
    &:focus-visible {
      outline: 1px solid ${theme.colors.input?.outlineColor};
    }

    &:disabled {
      background-color: ${theme.colors.state.disabled.bg};
      color: ${theme.colors.state.disabled.color};
      cursor: not-allowed;
    }

    &.${ClassName.ERROR} {
      outline-color: transparent;
      border-color: ${theme.colors.state.error.color};
    }

    &.${ClassName.SUCCESS} {
      outline-color: transparent;
      border-color: ${theme.colors.state.success.color};
    }
  `}
`;

const defaultInputProps = {
  autoComplete: "off",
  fullWidth: true,
  onFocus: (e: FocusEvent<HTMLInputElement>) => {
    e.target.classList.add(ClassName.TOUCHED);
  },
};

export default Input;
