import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const colors = {
  get: '#6cbf0d',
  post: '#00bcec',
  del: '#e8562e',
  delete: '#e8562e',
  put: '#a5639b',
};

const MethodTagImpl = styled.pre`
  background: ${({ children }) => colors[children]};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ mods }) => mods.compact ? '14px' : '1em'};
  padding: ${({ mods }) => mods.compact ? '0.05em 0.6em' : '0.5em 1em'};
  border-radius: 5px;
  text-transform: uppercase;
  line-height: ${({ mods }) => mods.compact ? '1.2em' : '1em'};
  margin: 0;
  display: inline-block;
`;

export const MethodTag = ({ children, ...rest }) => (
  <MethodTagImpl {...rest}>{children}</MethodTagImpl>
);

MethodTag.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

MethodTag.defaultProps = {
  className: null,
  id: null,
};

export default sharedComponent()(MethodTag);
