import Head from 'next/head'
import Layout from '../components/layouts/layout'
import CommentNotification from '../components/notifications/comment'
import RatedNotification from '../components/notifications/rated'
import WatchNotification from '../components/notifications/watch'
import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <>
      <Head>
          <title>MoviePicker</title>
          <meta name="description" content="MoviePicker - personalized movie finder."/>
          <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Layout>
        <div className={styles.container}>
          <div className='flex flex-col gap-10'>
            <CommentNotification comment="This is my comment This is my comment This is my comment
              This is my comment This is my comment This is my comment
              This is my comment This is my comment This is my comment This is my comment
              This is my comment This is my comment This is my comment This is my comment
              This is my comment This is my comment This is my comment This is my comment " />
            <RatedNotification />
            <WatchNotification />
          </div>
        </div>
      </Layout>
    </>
  )
}
