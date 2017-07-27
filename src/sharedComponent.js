/**
 * The higher-order-component responds to component modifications it receives from mod provider components
 * further up in the state tree. It also provides standardized fields for various things we
 * want to attach to our component, like subcomponents.
 *
 * All library components are wrapped in this HOC which will enable the use of mod components like <Small>
 *
 * See the pattern here:
 * https://medium.com/@bloodyowl/the-provider-and-higher-order-component-patterns-with-react-d16ab2d1636
 */
import React from 'react';
import PropTypes from 'prop-types';

const sharedComponent = (subComponents = {}, ) => (Wrapped) => {
  if (!Wrapped) {
    throw new Error(
      'sharedComponent was called with an undefined wrapped component',
    );
  }

  class ModAwareComponent extends React.Component {
    static contextTypes = {
      mods: PropTypes.shape({
        compact: PropTypes.bool,
        large: PropTypes.bool,
      }),
    };

    static usage = usage;

    render() {
      const { mods } = this.context;

      return <Wrapped {...this.props} mods={mods} />;
    }
  }

  Object.assign(ModAwareComponent, subComponents);
  ModAwareComponent.Class = Wrapped;
  return ModAwareComponent;
};

export default sharedComponent;
