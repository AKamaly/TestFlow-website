import { db } from '@/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export async function submitContactForm(formData: FormData) {
  // Get form data
  const name = formData.get('name')
  const email = formData.get('email')
  const company = formData.get('company')
  const companySize = formData.get('company-size')
  const message = formData.get('message')

  try {
    // Create a new document in the "User Submissions" collection
    const docRef = await addDoc(collection(db, 'User Submissions'), {
      name,
      email,
      company,
      companySize,
      message,
      createdAt: serverTimestamp(), // Add a timestamp for when the form was submitted
      formType: 'contact' // Add a field to distinguish contact form submissions
    })

    console.log('Form submission saved with ID:', docRef.id)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error saving form submission:', error)
    throw error
  }
}

export async function submitHeroForm(data: { email: string; name: string; position: string }) {
  try {
    // Create a new document in the "User Submissions" collection
    const docRef = await addDoc(collection(db, 'User Submissions'), {
      ...data,
      createdAt: serverTimestamp(),
      formType: 'hero' // Add a field to distinguish hero form submissions
    })

    console.log('Hero form submission saved with ID:', docRef.id)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error saving hero form submission:', error)
    throw error
  }
} 