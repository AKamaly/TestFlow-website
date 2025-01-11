'use server'

export async function submitContactForm(formData: FormData) {
  // Get form data
  const name = formData.get('name')
  const email = formData.get('email')
  const company = formData.get('company')
  const companySize = formData.get('company-size')
  const message = formData.get('message')

  // For now, just log the data
  console.log('Form submission:', {
    name,
    email,
    company,
    companySize,
    message
  })

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // In a real application, you would send this data to your backend
  return { success: true }
}

