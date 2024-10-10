"use client"

import styles from './chart.module.css'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';

const data = [
  { name: 'Jan', Gastos: 49998, Minutos: 4503.31},
  { name: 'Fev', Gastos: 43120, Minutos: 3902.12 },
  { name: 'Mar', Gastos: 37145, Minutos: 3100.56 },
  { name: 'Abr', Gastos: 29143, Minutos: 2340.30 },
  { name: 'Mai', Gastos: 23180, Minutos: 1840.97 },
  { name: 'Jun', Gastos: 27902, Minutos: 2003.13 },
  { name: 'Jul', Gastos: 36955, Minutos: 3992.12 },
  { name: 'Ago', Gastos: 20, Minutos: 80 },
  { name: 'Set', Gastos: 35, Minutos: 85 },
  { name: 'Out', Gastos: 45, Minutos: 90 },
  { name: 'Nov', Gastos: 50, Minutos: 110 },
  { name: 'Dez', Gastos: 35, Minutos: 95 },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gastos por Minutos traduzidos</h2>
      <div>
      <p className={styles.bigNumber}>Total Gasto: <b>500K</b></p>
      <p className={styles.bigNumber}>Minutos Traduzidos: <b>460</b></p>
      
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