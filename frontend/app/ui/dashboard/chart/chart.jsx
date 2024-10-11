"use client"

import styles from './chart.module.css'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';

const data = [
  { name: 'Jan', Gastos: 4503.31, Minutos: 49998},
  { name: 'Fev', Gastos: 3902.12, Minutos: 43120},
  { name: 'Mar', Gastos: 3100.56, Minutos: 37145},
  { name: 'Abr', Gastos: 2340.30, Minutos: 29143},
  { name: 'Mai', Gastos: 1840.97, Minutos: 23180},
  { name: 'Jun', Gastos: 2003.13, Minutos: 27902},
  { name: 'Jul', Gastos: 3992.12, Minutos: 36955},
  { name: 'Ago', Gastos: 1899, Minutos: 21023 },
  { name: 'Set', Gastos: 2031, Minutos: 24023},
  { name: 'Out', Gastos: 1975, Minutos: 20099 },
  { name: 'Nov', Gastos: 1922.50, Minutos: 20342 },
  { name: 'Dez', Gastos: 4692.12, Minutos: 50998 },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gastos por Minutos traduzidos</h2>
      <div>
      <p className={styles.bigNumber}>Total Gasto: <b>$ 34.200</b></p>
      <p className={styles.bigNumber}>Minutos Traduzidos: <b>383.928</b></p>
      
      </div>
      <ResponsiveContainer width="100%" height={392}>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Gastos" barSize={20} fill="#82ca9d" yAxisId="left"/>
          <Line type="monotone" dataKey="Minutos" stroke="#8884d8" yAxisId="right"/>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart