import Head from 'next/head'
import { useContext } from 'react'
import Layout from '../components/layouts/layout'
import CommentNotification from '../components/notifications/comment'
import RatedNotification from '../components/notifications/rated'
import WatchNotification from '../components/notifications/watch'
import Rating from '../components/rating'
import { userContext } from '../contexts/user'
import styles from '../styles/Home.module.css'


export default function Home() {
  const { notifications, getUser } = useContext(userContext)

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
            {
              notifications.map((notification) => notification.type == 'rating' ?
                <RatedNotification
                  key={notification.date}
                  rating={notification.rating || 0}
                  movie={notification.movie}
                  user={getUser(notification.user)}
                ></RatedNotification> :
                <CommentNotification
                key={notification.date}
                  comment={notification.comment || ''}
                  movie={notification.movie}
                  user={getUser(notification.user)}
                  ></CommentNotification>)
            }
          </div>
        </div>
      </Layout>
    </>
  )
}
