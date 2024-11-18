import Image from 'next/image'
import { AiFillApi } from 'react-icons/ai'
import { FaKey } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import { MdHelpCenter, MdLogout, MdOutlineSettings } from 'react-icons/md'
import { RiDashboard3Fill, RiVideoAddFill } from 'react-icons/ri'

import { Button } from '@/components/ui/button'

import MenuLink from './menuLink/menuLink'
import styles from './sidebar.module.css'

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <RiDashboard3Fill />,
      },
      {
        title: 'API',
        path: '/dashboard/api',
        icon: <AiFillApi />,
      },
      {
        title: 'Chaves',
        path: '/dashboard/access-key',
        icon: <FaKey />,
      },
      {
        title: 'Dub Sandbox',
        path: '/dashboard/webplayer',
        icon: <RiVideoAddFill />,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
]

const Sidebar = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.beluga}>
        <Image
          className={styles.belugaImage}
          src={'/beluga-white 1.png'}
          alt=""
          width="60"
          height="50"
        />
        <div className={styles.belugaDetail}>
          <span className={styles.belugaName}>BELUGA</span>
        </div>
      </div>

      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={'/noavatar.png'}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Felipe Furukawa</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          'use server'
          // eslint-disable-next-line no-undef
          await signOut()
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
        <Button className="bg-teal-900 text-teal-200 p-5 pt-7 pb-7 rounded-lg">
          Compre créditos
          <FiArrowUpRight />
        </Button>
      </form>
    </div>
  )
}

export default Sidebar
