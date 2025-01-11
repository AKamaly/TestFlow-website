import { Laptop, Database, Cloud } from 'lucide-react'

export function IntegrationSection() {
  return (
    <section className="py-20 md:py-32 border-t border-white/10">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Seamless Integration
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Connect with your existing tools and workflows
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group p-6 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/10">
            <div className="flex items-center gap-4 mb-4">
              <Laptop className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-semibold">Testing Equipment</h3>
            </div>
            <p className="text-gray-400">
              Compatible with all major testing instruments and hardware platforms
            </p>
          </div>
          <div className="group p-6 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/10">
            <div className="flex items-center gap-4 mb-4">
              <Database className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-semibold">Data Management</h3>
            </div>
            <p className="text-gray-400">
              Automated reporting with Google Sheets, Excel, and database integration
            </p>
          </div>
          <div className="group p-6 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/10">
            <div className="flex items-center gap-4 mb-4">
              <Cloud className="w-8 h-8 text-purple-400" />
              <h3 className="text-xl font-semibold">Cloud Platform</h3>
            </div>
            <p className="text-gray-400">
              Access your validation workflows and results from anywhere
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-8 items-center flex-wrap">
          {['Email Reports', 'Google Sheets', 'Slack', 'Jira', 'Microsoft Teams'].map((app) => (
            <div
              key={app}
              className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-white/40" />
              {app}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

