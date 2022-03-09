import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

import ItemList from '../components/ItemList'
import ItemDetail from '../components/ItemCard'



export default function LogIn({ items }) {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  return (
    <div className='container'>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign In</button>
        </>
      )}
      {
        session && (
          <>
          Signed in as {session.user.email} <br />
          <div> You can now access our super secret pages</div>
          <Link href='/secret'>To the secret</Link>
          <button onClick={signOut}>Sign Out</button>
          </>
        )
      }
     
    </div>
  )
}


