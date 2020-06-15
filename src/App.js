import React, { Component } from "react";
import InputFullSalary from "./components/InputFullSalary";
import InputReadOnly from "./components/InputReadOnly";
import Title from "./components/Title";
import ProgressBarSalary from "./components/ProgressBarSalary";
import { formatMoney } from "./helpers/formatters";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      baseINSS: "",
      baseIRPF: "",
      discountINSS: "",
      discountIRPF: "",
      netSalary: "",
      percentINSSFormat: "",
      percentIRPFFormat: "",
      percentNetSalaryFormat: "",
      percentINSS: "0",
      percentIRPF: "0",
      percentNetSalary: "0",
      colorINSS: "#e67e22",
      colorIRPF: " #c0392b",
      colorSalary: "#16a085",
    };
  }

  handleOnChange = (obj) => {
    if (obj.baseINSS !== "") {
      this.setState({
        baseINSS: formatMoney(obj.baseINSS) || "",
        baseIRPF: formatMoney(obj.baseIRPF) || "",
        discountINSS: formatMoney(obj.discountINSS) || "",
        discountIRPF: formatMoney(obj.discountIRPF) || "",
        netSalary: formatMoney(obj.netSalary) || "",
        percentINSSFormat: `(${obj.percentINSS}%)` || "",
        percentIRPFFormat: `(${obj.percentIRPF}%)` || "",
        percentNetSalaryFormat: `(${obj.percentNetSalary}%)` || "",
        percentINSS: obj.percentINSS || "0",
        percentIRPF: obj.percentIRPF || "0",
        percentNetSalary: obj.percentNetSalary || "0",
      });
    } else {
      this.setState({
        baseINSS: "",
        baseIRPF: "",
        discountINSS: "",
        discountIRPF: "",
        netSalary: "",
        percentINSSFormat: "",
        percentIRPFFormat: "",
        percentNetSalaryFormat: "",
        percentINSS: "0",
        percentIRPF: "0",
        percentNetSalary: "0",
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Title titulo="React Salário"></Title>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <InputFullSalary onChange={this.handleOnChange}></InputFullSalary>
          </div>
        </div>

        <div className="row">
          <div className="col s3">
            <InputReadOnly
              value={this.state.baseINSS}
              placeHolder="Base INSS"
            ></InputReadOnly>
          </div>
          <div className="col s3">
            <InputReadOnly
              value={`${this.state.discountINSS} ${this.state.percentINSSFormat}`.trim()}
              placeHolder="Desconto INSS"
            ></InputReadOnly>
          </div>
          <div className="col s3">
            <InputReadOnly
              value={this.state.baseIRPF}
              placeHolder="Base IRPF"
            ></InputReadOnly>
          </div>
          <div className="col s3">
            <InputReadOnly
              value={`${this.state.discountIRPF} ${this.state.percentIRPFFormat}`.trim()}
              placeHolder="Desconto IRPF"
            ></InputReadOnly>
          </div>
        </div>

        <div className="row">
          <div className="col s3">
            <InputReadOnly
              value={`${this.state.netSalary} ${this.state.percentNetSalaryFormat}`.trim()}
              placeHolder="Salário Líquido"
            ></InputReadOnly>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <ProgressBarSalary
              percentagem={`${this.state.percentINSS}%`}
              color={this.state.colorINSS}
            ></ProgressBarSalary>
            <ProgressBarSalary
              percentagem={`${this.state.percentIRPF}%`}
              color={this.state.colorIRPF}
            ></ProgressBarSalary>
            <ProgressBarSalary
              percentagem={`${this.state.percentNetSalary}%`}
              color={this.state.colorSalary}
            ></ProgressBarSalary>
          </div>
        </div>
      </div>
    );
  }
}
