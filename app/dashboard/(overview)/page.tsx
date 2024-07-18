import CardWrapper, { Card } from '@/app/ui/dashboard/cards'
import RevenueChart from '@/app/ui/dashboard/revenue-chart'
import LatestInvoices from '@/app/ui/dashboard/latest-invoices'
import { lusitana } from '@/app/ui/fonts'
import {
  fetchCardData,
  fetchLatestInvoices
  // fetchRevenue
} from '../../lib/data'
import { Suspense } from 'react'
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton
} from '@/app/ui/skeletons'

export default async function Page() {
  // const revenue = await fetchRevenue() 👽 Ahora hace la peticion de datos en el componente RevenueChart
  // const latestInvoices = await fetchLatestInvoices() 👽 Ahora hace la peticion de datos en el componente LatestInvoices
  // const {
  //   numberOfCustomers,
  //   numberOfInvoices,
  //   totalPaidInvoices,
  //   totalPendingInvoices
  // } = await fetchCardData() 👽 Ahora hace la peticion de datos en el componente CardWrapper

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {/*  ✉️ se ahce striming a nivel pagina */}
        {/* <Card title='Collected' value={totalPaidInvoices} type='collected' />
        <Card title='Pending' value={totalPendingInvoices} type='pending' />
        <Card title='Total Invoices' value={numberOfInvoices} type='invoices' />
        <Card
          title='Total Customers'
          value={numberOfCustomers}
          type='customers'
        /> */}
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
        {/* <RevenueChart revenue={revenue} />  ✉️ se ahce striming a nivel pagina */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          {/* //Striming a  nivel componente y a nivel pagina esta el loading que esta el (overview)loading.tsx*/}
          <RevenueChart />
        </Suspense>

        {/* <LatestInvoices latestInvoices={latestInvoices} /> ✉️ se ahce striming a nivel pagina */}
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          {/* //Striming a  nivel componente y a nivel pagina esta el loading que esta el (overview)loading.tsx*/}
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  )
}
