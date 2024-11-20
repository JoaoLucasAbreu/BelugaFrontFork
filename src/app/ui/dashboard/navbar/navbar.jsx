'use client'
import { HStack } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from 'react-icons/md'

import styles from './navbar.module.css'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split('/').pop()}</div>
      <div className={styles.menu}>
        <HStack className="bg-cyan-900 p-2 rounded-md text-teal-200">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-cyan-900 placeholder-teal-200"
          />
        </HStack>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
