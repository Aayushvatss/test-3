'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function InnerPantryDashboard() {
  const [tasks, setTasks] = useState([])
  const [deliveryPersonnel, setDeliveryPersonnel] = useState([])

  useEffect(() => {
    // Fetch tasks and delivery personnel data
    // This is a placeholder. In a real application, you would fetch data from your API
    setTasks([])
    setDeliveryPersonnel([])
  }, [])

  const updateTaskStatus = async (taskId, newStatus) => {
    // Update task status via API
    // Refresh tasks list
    console.log(`Updating task ${taskId} to ${newStatus}`)
  }

  const assignDelivery = async (taskId, personnelId) => {
    // Assign delivery via API
    // Refresh tasks list
    console.log(`Assigning task ${taskId} to personnel ${personnelId}`)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Inner Pantry Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Meal Preparation Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Meal</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell>{task.patient.name}</TableCell>
                    <TableCell>{task.meal.type}</TableCell>
                    <TableCell>{task.status}</TableCell>
                    <TableCell>
                      <Button onClick={() => updateTaskStatus(task.id, 'IN_PROGRESS')} disabled={task.status !== 'PENDING'}>
                        Start
                      </Button>
                      <Button onClick={() => updateTaskStatus(task.id, 'COMPLETED')} disabled={task.status !== 'IN_PROGRESS'}>
                        Complete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Delivery Personnel</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact Info</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deliveryPersonnel.map((person) => (
                  <TableRow key={person.id}>
                    <TableCell>{person.name}</TableCell>
                    <TableCell>{person.contactInfo}</TableCell>
                    <TableCell>
                      <Button onClick={() => assignDelivery(null, person.id)} disabled={!tasks.length}>
                        Assign Delivery
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

