import LocalizedClientLink from '@/components/localized-client-link'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <h1>this is company home page</h1>
        <LocalizedClientLink href="company/create">create new company</LocalizedClientLink>
    </div>
  )
}

export default page