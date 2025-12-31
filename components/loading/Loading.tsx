import { Spinner } from '@chakra-ui/react'

export default function Loading() {

  return (
    <div className="flex flex-col gap-y-5 items-center justify-center h-screen w-full bg-[#FF5F00]/50">
      <Spinner
        className="w-25 h-25"
        data-testid="loading"
        color="#593329"
      />
      <span className="text-3xl text-[#593329] font-bold text">Loading...</span>
    </div>
  )

}