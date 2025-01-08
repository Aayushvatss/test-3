'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function DeliveryPersonnelDashboard() {
  const [deliveries, setDeliveries] = useState([])

  useEffect(() => {
    // Fetch assigned deliveries
    // This is a placeholder. In a real application, you would fetch data from your API
    setDeliveries([])
  }, [])

  const markDelivered = async (deliveryId) => {
    // Mark delivery as delivered via API
    // Refresh deliveries list
    console.log(`Marking delivery ${deliveryId} as delivered`)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Delivery Personnel Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Assigned Deliveries</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Room</TableHead>
                <TableHead>Meal</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deliveries.map((delivery) => (
                <TableRow key={delivery.id}>
                  <TableCell>{delivery.patient.name}</TableCell>
                  <TableCell>{delivery.patient.roomNumber}</TableCell>
                  <TableCell>{delivery.meal.type}</TableCell>
                  <TableCell>{delivery.status}</TableCell>
                  <TableCell>
                    <Button onClick={() => markDelivered(delivery.id)} disabled={delivery.status === 'DELIVERED'}>
                      Mark Delivered
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

