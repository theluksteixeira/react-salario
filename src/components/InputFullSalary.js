import React, { Component } from "react";
import { calculateSalaryFrom } from "../helpers/salary";

export default class InputFullSalary extends Component {
  constructor() {
    super();
    this.state = {
      valueFullSalary: "",
    };
  }

  handleFullSalary = (event) => {
    this.setState({
      valueFullSalary: event.target.value,
    });

    const retorno = calculateSalaryFrom(event.target.value);
    this.props.onChange(retorno);
    
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            id="fullSalary"
            value={this.valueFullSalary}
            type="text"
            onChange={this.handleFullSalary}
          />
          <label htmlFor="fullSalary">Salário Bruto</label>
        </div>
      </div>
    );
  }
}
