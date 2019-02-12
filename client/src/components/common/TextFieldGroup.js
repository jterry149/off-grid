// Required Dependencies
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// Build the textfield group 
const TextFieldGroup = ({
    name,
    icon,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled
}) => {
    // Return the fields for the user
    return (
      <div className="form-group">
        <input
          type={type}
          className={classnames('form-control form-control-lg', {
            'is-invalid': error
          })}
          placeholder={placeholder}
          name={name}
          icon={icon}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {info && <small className="form-text text-muted">{info}</small>}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
};

// Build the field groups propTypes
TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    icon: PropTypes.icon,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string
};

// Assign the defaultProps
TextFieldGroup.defaultProps = {
    type: 'text'
};

// Export the TextFieldGroup
export default TextFieldGroup;
  
