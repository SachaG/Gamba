import React, { Component } from 'react';
import Select from 'react-select-plus';
import FRC from 'formsy-react-components';

const Input = FRC.Input;

class GroupedOptionsField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    const ids = _.pluck(value, '_id');
    this.setState({ value: ids });
    /*
    note: the following line is not necessary because we're already adding
    the ids to a hidden field.
    */
    // this.context.addToAutofilledValues({ [this.props.name]: ids })
  }

  render() {
    return (
      <div className="form-group row">
        <label className="control-label col-sm-3">{this.props.label}</label>
        <div className="col-sm-9">
          <div className="react-select-plus-field">
            <Select
              onChange={this.onChange}
              options={this.props.options}
              multi={true}
              placeholder={this.props.placeholder}
              value={this.state.value}
              openOnFocus={true}
            />
            <Input name={this.props.name} type="hidden" readOnly value={this.state.value} />
          </div>
        </div>
      </div>
    );
  }
}

GroupedOptionsField.contextTypes = {
  addToAutofilledValues: React.PropTypes.func,
}

export default GroupedOptionsField;