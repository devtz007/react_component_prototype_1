import styled, { css, RuleSet } from 'styled-components';

/* Import media */

/* Import custom components */

/* Define data type of props */
interface Props {
  infoP?: {
    label?: string;
  };
  $custom_styles?: RuleSet;
  stylesP?: RuleSet;
}

/* DOCUMENTATION */
/**
 * @component - `<Prototype1PagePart />` (In HTML: `prototype_type_tiny_pagePart_1`)
 * @description Renders a customizable container with optional label text and custom styles.
 * This component supports passing additional styles via props and displays a default label if none is provided.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} [props.infoP] - Information for the component, such as a label.
 * @param {string} [props.infoP.label] - Optional label text to display.
 * @param {RuleSet} [props.stylesP] - Optional additional styles passed by prop.
 * @example
 * <Prototype1PagePart
 *   stylesP={css`
 *     &.chat_box_window_1_pagePart {
 *     }
 *   `}
 *   infoP={{ label: "Sample Label" }}
 * />
 */

// Base styles for the component
const baseStyles = css``;

// Styled component with custom attribute to inject styles passed by prop
const Prototype1PagePartStyledWrapper = styled.div<Props>`
  ${baseStyles}
  ${({ $custom_styles }) => {
    return $custom_styles;
  }};
`;

const Prototype1PagePart: React.FC<Props> = (props): JSX.Element => {
  // Destructure props
  const { infoP, stylesP } = props;

  const { label = "Default value if props value doesn't exist" } = infoP || {};

  return (
    <Prototype1PagePartStyledWrapper className="prototype_1_pagePart" $custom_styles={stylesP as RuleSet}>
      {label}
    </Prototype1PagePartStyledWrapper>
  );
};

export default Prototype1PagePart;
