export function UseCasesSection() {
  const useCases = [
    {
      title: "Semiconductor",
      description: "Validate chips and integrated circuits with automated testing workflows",
      icon: "🔧"
    },
    {
      title: "Electronics",
      description: "Streamline validation for consumer and industrial electronics",
      icon: "⚡"
    },
    {
      title: "Automotive",
      description: "Ensure reliability of automotive electronics and components",
      icon: "🚗"
    },
    {
      title: "Research Labs",
      description: "Accelerate research with automated validation processes",
      icon: "🔬"
    }
  ]

  return (
    <section className="py-20 md:py-32 border-t border-white/10">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how different industries use Atoms Testflow to accelerate their validation process
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group p-6 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/10"
            >
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-400 mb-4">{useCase.description}</p>
              <Link
                href="#"
                className="inline-flex items-center text-sm text-white hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

