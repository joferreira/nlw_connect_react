import Image from 'next/image'

import cooper from '../../assets/medal-cooper.svg'
import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-5">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-5 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1°</span> | Josemar Ferreira
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image
            src={gold}
            alt="medalha de ouro"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-5 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2°</span> | Josemar Ferreira
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1020
          </span>

          <Image
            src={silver}
            alt="medalha de prata"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-5 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3°</span> | Josemar Ferreira
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1012
          </span>

          <Image
            src={cooper}
            alt="medalha de bonze"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
