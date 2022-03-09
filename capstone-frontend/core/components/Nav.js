import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import headerStyles from '../styles/Header.module.css'
import { signOut } from 'next-auth/react'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/home'>Home</Link>
                </li>
                <li>
                    <Link href='/mycloset'>Closet</Link>
                </li>
                <li>
                    <Link href='/mycommunity'>Community</Link>
                </li>

                <h1 className={headerStyles.title}>CommunityCloset</h1>
                <li>
                    <Link href='/'>Log Out</Link>
                </li>
                {/* <li>
                    <Link href='/mycommunity'>Community</Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default Nav