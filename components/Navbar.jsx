import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className='flex justify-around'>
            <li><Link href='/'>Gweru</Link></li>
            <li><Link href='/gbsl'>GBSL</Link></li>
            <li><Link href='/harare'>Harare</Link></li>
            <li><Link href='/kwekwe'>Kwekwe</Link></li>
            <li><Link href='/zvishavane'>Zvishavane</Link></li>
        </ul>
    </div>
  )
}

export default Navbar