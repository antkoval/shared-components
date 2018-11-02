import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import * as styles from './styles';
import Downshift from 'downshift';
import { Manager, Reference, Popper } from 'react-popper';
import popperMatchWidthModifier from './popperMatchWidthModifier';
import { Foreground } from 'behaviors';
import isString from 'lodash.isstring';
import isFunction from 'lodash.isfunction';
import isPlainObject from 'lodash.isplainobject';

const defaultRenderOption = option => {
  if (!option) {
    return '';
  }

  if (isString(option)) {
    return option;
  }

  if (isPlainObject(option)) {
    return option.label || option.name || option.id || JSON.stringify(option);
  }

  return JSON.stringify(option);
};

class Select extends React.PureComponent {
  static propTypes = {
    /**
     * The name to apply to the input field
     */
    name: PropTypes.string,
    /**
     * Text or node to show if none is selected
     */
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
     * Adds a class name to the element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the element.
     */
    id: PropTypes.string,
    /**
     * Indicates whether the user can interact with this field.
     */
    disabled: PropTypes.bool,
    /**
     * Indicates whether this field is required for form submission. Non-required fields allow none.
     */
    required: PropTypes.bool,
    /**
     * Styles this field as being invalid
     */
    invalid: PropTypes.bool,
    /**
     * A list of selection options. Can be complex objects.
     */
    options: PropTypes.array.isRequired,
    /**
     * A function which takes an option and renders text for the select. Has
     * a sane default.
     */
    renderOption: PropTypes.func,
    /**
     * The currently selected value.
     */
    value: PropTypes.any,
    /**
     * Handler for change events on the select. It will be called with the exact
     * option you passed in via options
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Alias for isLoading
     */
    loading: PropTypes.bool,
    /**
     * Any additional props you want to pass to the underlying Popper instance
     */
    popperProps: PropTypes.object,
    /**
     * Renders the visible input and controls which show
     * the currently selected value and allow interaction.
     * Use to override behavior. Reference the library's default implementation
     * code for details about how to implement your custom version.
     */
    CurrentValue: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /**
     * Renders the options list. Reference the library's default implementation
     * code for details about how to implement your own custom version
     */
    Options: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  };

  static defaultProps = {
    className: null,
    id: null,
    disabled: false,
    required: false,
    allowNone: false,
    invalid: false,
    placeholder: 'Select one',
    renderOption: defaultRenderOption,
    CurrentValue: styles.CurrentValue,
    Options: styles.Options,
  };

  static styles = styles;

  render() {
    const {
      required,
      placeholder,
      noneText,
      allowNone,
      isLoading,
      loading,
      invalid,
      value,
      renderOption,
      options,
      getOptionValue,
      searchable,
      disabled,
      onChange,
      Searchable,
      CurrentValue,
      Options,
      id,
      className,
      popperProps,
      ...rest
    } = this.props;
    const combinedLoading = loading || isLoading;
    const combinedPlaceholder = noneText !== undefined ? noneText : placeholder;

    return (
      <Downshift
        onChange={onChange}
        itemCount={options.length}
        itemToString={renderOption}
        selectedItem={value}
        {...rest}
      >
        {downshiftProps => (
          <div>
            <Manager>
              <Reference>
                {({ ref }) => (
                  <CurrentValue
                    {...downshiftProps}
                    ref={ref}
                    placeholder={combinedPlaceholder}
                    disabled={disabled}
                    loading={combinedLoading}
                    invalid={invalid}
                    required={required}
                    id={id}
                    className={className}
                  />
                )}
              </Reference>
              {downshiftProps.isOpen && (
                <Popper
                  placement="bottom"
                  modifiers={{
                    matchWidth: popperMatchWidthModifier,
                    flip: {
                      behavior: 'flip',
                      padding: 20,
                    },
                  }}
                  {...popperProps}
                >
                  {popperStuff => {
                    return (
                      <Foreground>
                        <Options
                          {...popperStuff}
                          {...downshiftProps}
                          renderOption={renderOption}
                          options={options}
                        />
                      </Foreground>
                    );
                  }}
                </Popper>
              )}
            </Manager>
          </div>
        )}
      </Downshift>
    );
  }
}

export default Select;
