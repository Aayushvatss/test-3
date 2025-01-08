import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface PatientFormProps {
  onClose?: () => void;
}

export default function PatientForm({ onClose = () => {} }: PatientFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    diseases: '',
    allergies: '',
    roomNumber: '',
    bedNumber: '',
    floorNumber: '',
    age: '',
    gender: '',
    contactInfo: '',
    emergencyContact: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Submit form data to API
    // Close form on success
    if (typeof onClose === 'function') {
      onClose()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="diseases">Diseases</Label>
        <Input id="diseases" name="diseases" value={formData.diseases} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="allergies">Allergies</Label>
        <Input id="allergies" name="allergies" value={formData.allergies} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="roomNumber">Room Number</Label>
        <Input id="roomNumber" name="roomNumber" value={formData.roomNumber} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="bedNumber">Bed Number</Label>
        <Input id="bedNumber" name="bedNumber" value={formData.bedNumber} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="floorNumber">Floor Number</Label>
        <Input id="floorNumber" name="floorNumber" value={formData.floorNumber} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="age">Age</Label>
        <Input id="age" name="age" type="number" value={formData.age} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="gender">Gender</Label>
        <Input id="gender" name="gender" value={formData.gender} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="contactInfo">Contact Information</Label>
        <Input id="contactInfo" name="contactInfo" value={formData.contactInfo} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="emergencyContact">Emergency Contact</Label>
        <Input id="emergencyContact" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} required />
      </div>
      <Button type="submit">Submit</Button>
      <Button type="button" onClick={() => typeof onClose === 'function' && onClose()} variant="outline">Cancel</Button>
    </form>
  )
}

