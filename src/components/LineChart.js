import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getRegistroPagos } from "../helpers/GetRegistroPagos";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart = ({ registroPagosAsc, setRegistroPagosAsc }) => {
  const ordenamiento = "ascendente";
  useEffect(() => {
    getRegistroPagos(ordenamiento).then((res) => {
      setRegistroPagosAsc(res);
    });
    // eslint-disable-next-line
  }, []);

  let dataTransacciones = [];
  let indexs = [];

  // eslint-disable-next-line array-callback-return
  registroPagosAsc.map((transaccion) => {
    indexs.push(transaccion.id);
    dataTransacciones.push(transaccion.montoAcumulado);
  });

  const data = {
    labels:indexs,
    datasets: [
      {
        label: "Ingresos / Egresos",
        data: dataTransacciones,
        borderColor: "rgba(8, 185, 229, 0.5)",
        backgroundColor: "rgba(30, 204, 242, 0.5)",
        tension: 0.5,
      },
    ],

    scaleOptions: {
      ticks: {
        beginAtZero: true,
      },
    },
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Gráfico de Ingresos",
      },
    },
  };
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};
