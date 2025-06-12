import { cn } from '@/lib/utils'
import React from 'react'
type BillingInputsProps = {
    Name?: string
    placeHolder?: string
}
const BillingInputs = ({Name,placeHolder}:BillingInputsProps) => {
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <label className="text-gray-700 font-normal text-base mb-1">
          {Name}
        </label>
        <input
          type="text"
          placeholder={placeHolder}
          className={cn(
            "flex h-9 w-full items-center rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          )}
        />
      </div>
    </>
  )
}

export default BillingInputs