import Image from 'next/image'

export function TrustLogos() {
  const companies = [
    {
      name: "Intel",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/intel-IeMtTXMrINBR58CEWkV8Ovo3EJn2aL.svg",
      width: 120
    },
    {
      name: "Altera",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Altera-Logo.wine-hMJrLdLmIGwBSMJgWOCf6c6Pg9PlN9.svg",
      width: 140
    },
    {
      name: "National Yunlin University",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/National_Yunlin_University_of_Science_and_Technology_logo-wYHTJmFTMjpeOHynGiYopj8VeFZ2wN.svg",
      width: 130
    },
    {
      name: "APEARC",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apearc-HFJscvYOnHfKA46ltdDpsLXHdNezye.svg",
      width: 150
    },
    {
      name: "Enpirion",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/enpirion-TgcS78xoTCbi872uMAvnQyy3gKzB27.svg",
      width: 120
    }
  ] as const

  return (
    <div className="w-full mt-8">
      <p className="text-sm text-gray-400 text-center mb-6">
        Built by engineers from
      </p>
      <div className="flex items-center justify-center gap-12 overflow-hidden flex-wrap md:flex-nowrap">
        {companies.map((company) => (
          <div
            key={company.name}
            className="relative group transition-all duration-500"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            <div className="relative p-4">
              <Image
                src={company.logo}
                alt={company.name}
                width={company.width}
                height={48}
                className="h-12 w-auto object-contain relative brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300"
                style={{ maxWidth: company.width }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

