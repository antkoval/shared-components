import styled from 'styled-components';
import get from 'extensions/themeGet';
import DefaultScrollContainer from 'behaviors/ScrollShadow/DefaultScrollContainer';

export default styled(DefaultScrollContainer)`
  background: ${get('colors.background.default')};
  border-width: ${get('thicknesses.normal')};
  border-style: solid;
  border-color: ${get('colors.border.medium')};
  border-radius: 5px 5px 0 0;
  font-size: 1em;
  width: 100%;
  overflow-x: auto;
  position: relative;
`;
