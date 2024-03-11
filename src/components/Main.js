import React, { useState } from "react";
import Inputs from "./Inputs";
import Result from "./Result";

const Main = () => {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });
  const [selectedChart, setSelectedChart] = useState("pie");

  const setChartType = (e) => {
    setSelectedChart(e.target.value);
  };

  const setHomeValue = (e) => {
    let newData = { ...data };
    newData.homeValue = e.target.value;
    newData.downPayment = e.target.value * 0.2;
    newData.loanAmount = e.target.value * 0.8;
    setData(newData);
  };

  const setDownPayment = (e) => {
    let newData = { ...data };
    newData.downPayment = e.target.value;
    newData.loanAmount = newData.homeValue - newData.downPayment;
    setData(newData);
  };

  const setLoanAmount = (e) => {
    let newData = { ...data };
    newData.loanAmount = e.target.value;
    newData.downPayment = newData.homeValue - newData.loanAmount;
    setData(newData);
  };

  const setInterest = (e) => {
    let newData = { ...data };
    newData.interestRate = e.target.value;
    setData(newData);
  };

  const setTenure = (e) => {
    let newData = { ...data };
    newData.loanTerm = e.target.value;
    setData(newData);
  };

  return (
    <main className="py-4 px-4 sm:px-8 w-full flex-1 md:grid md:grid-cols-2 gap-4">
      <div className="flex flex-col justify-center items-center flex-1 max-w-[50%] p-0.5 gap-4">
        <Inputs
          type="home"
          title="Home Value"
          value={data.homeValue}
          step={100}
          min={1000}
          max={10000}
          onChange={setHomeValue}
          className="flex flex-col "
        />

        <Inputs
          type="down"
          title="Down Payment"
          value={data.downPayment}
          step={100}
          min={0}
          max={data.homeValue}
          onChange={setDownPayment}
          className="flex flex-col "
        />

        <Inputs
          type="loan"
          title="Loan Amount"
          value={data.loanAmount}
          step={100}
          min={0}
          max={data.homeValue}
          onChange={setLoanAmount}
          className="flex flex-col "
        />

        <Inputs
          type="interest"
          title="Interest Rate"
          value={data.interestRate}
          step={1}
          min={2}
          max={18}
          onChange={setInterest}
          className="flex flex-col "
        />

        <div className="flex  gap-8 ">
          <div>
            <label
              htmlFor="tenure"
              className="text-xl font-semibold underline mb-2"
            >
              Tenure
            </label>
            <select
              className="round"
              id="tenure"
              value={data.loanTerm}
              onChange={setTenure}
            >
              <option value={5}>5 Years</option>
              <option value={10}>10 Years</option>
              <option value={15}>15 Years</option>
              <option value={20}>20 Years</option>
              <option value={25}>25 Years</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="chartType"
              className="text-xl font-semibold underline mb-2"
            >
              Chart Type
            </label>
            <select
              className="round"
              id="chartType"
              value={selectedChart}
              onChange={setChartType}
            >
              <option value="pie">Pie Chart</option>
              <option value="bar">Bar Chart</option>
            </select>
          </div>
        </div>
      </div>
      <Result data={data} selectedChart={selectedChart} />
    </main>
  );
};

export default Main;
