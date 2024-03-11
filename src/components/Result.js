import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  BarElement,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

const Result = ({ data, selectedChart }) => {
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    LinearScale,
    CategoryScale,
    BarElement
  );
  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;

  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  const pieChartData = {
    labels: ["Principle", "Interest", "Monthly Payment", "Down Payment"],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [homeValue, totalInterestGenerated, monthlyPayment, downPayment],
        backgroundColor: [
          "rgb(255, 171, 146)",
          "rgb(95, 189, 255)",
          "rgb(123, 102, 255)",
          "rgb(150, 239, 255)",
        ],
      },
    ],
  };

  const barChartData = {
    labels: ["Principal", "Interest", "Monthly Payment", "Down Payment"],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [loanAmount, totalInterestGenerated, monthlyPayment, downPayment],
        backgroundColor: [
          " rgb(255, 171, 146)",
          "rgb(95, 189, 255)",
          "rgb(123, 102, 255)",
          "rgb(150, 239, 255)",
        ],
      },
    ],
  };

  const renderChart = () => {
    switch (selectedChart) {
      case "bar":
        return (
          <Bar
            data={barChartData}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
                x: {
                  type: "category",
                  labels: barChartData.labels,
                },
              },
            }}
          />
        );
      default:
        return <Pie data={pieChartData} />;
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl mb-4">
        Monthly Payment:{" "}
        <span className="text-green-600 font-bold">
          {monthlyPayment.toFixed(3)}
        </span>
      </h2>
      <div className="w-4/5 mx-auto">{renderChart()}</div>
    </div>
  );
};

export default Result;
