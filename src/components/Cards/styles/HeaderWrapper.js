import styled from 'styled-components';
import themeGet from 'extensions/themeGet';

const HeaderWrapper = styled.div`
  color: ${themeGet('colors.background.default')};
  font-size: 1.2em;
  font-weight: 500;
  text-transform: uppercase;
  background-image: url(${props => props.image || 'none'});
  background-size: cover;
  padding: ${themeGet('spacing.medium')};
  padding-top: ${themeGet('spacing.extraLarge')};
  flex: 1;
`;

export default HeaderWrapper;
