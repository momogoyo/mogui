'use client'

import { useEffect, useState } from 'react'
import { Select } from '@momogoyo/mogui'

const Page = () => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="mogui">
      {mounted && (
        <div id="moguiCard">
          <Select placeholder="선택하세요"></Select>
        </div>
      )}

      <style jsx>{`
        .mogui {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default Page