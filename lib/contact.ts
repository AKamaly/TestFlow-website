export async function submitContactForm(formData: FormData) {
  // Get form data
  const name = formData.get('name')
  const email = formData.get('email')
  const company = formData.get('company')
  const companySize = formData.get('company-size')
  const message = formData.get('message')

  // For now, just simulate an API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  // In a real application, you would send this data to an external API endpoint
  // Example:
  // const response = await fetch('https://api.your-backend.com/contact', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     name,
  //     email,
  //     company,
  //     companySize,
  //     message
  //   })
  // })

  console.log('Form submission:', {
    name,
    email,
    company,
    companySize,
    message
  })

  return { success: true }
} 