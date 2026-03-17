import { Spinner } from '@chakra-ui/react'

export default function Loading() {

  return (
    <div className="flex flex-col gap-y-3 items-center justify-center h-32 w-full">
      <Spinner
        className="w-15 h-15 text-primary"
        data-testid="loading"
      />
      <span className="text-3xl text-primary font-bold text">Loading...</span>
    </div>
  )

}