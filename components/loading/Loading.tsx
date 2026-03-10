import { Spinner } from '@chakra-ui/react'

export default function Loading() {

  return (
    <div className="flex flex-col gap-y-5 items-center justify-center h-screen w-full">
      <Spinner
        className="w-25 h-25 text-primary"
        data-testid="loading"
      />
      <span className="text-3xl text-primary font-bold text">Loading...</span>
    </div>
  )

}