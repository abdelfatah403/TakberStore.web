import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '../ui/breadcrumb'
import Link from 'next/link'

const Breadcrumps = () => {
  return (
    <div className=" bg-[#8c0e71] h-12 flex items-center justify-center">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {/* ... */}
        </BreadcrumbList>
      </Breadcrumb>
      </div>
  )
}

export default Breadcrumps