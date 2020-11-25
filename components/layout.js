import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { UserProvider, useFetchUser } from "../utils/user";

const name = "Saash";
export const siteTitle = "Next.js Blog";

export default function Layout({ children }) {
  const { user, loading } = useFetchUser();
  console.log(user, loading);

  return (
    <UserProvider value={{ user, loading }}>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          <nav>
            <Link href="/">
              <a className={utilStyles.headingLg}>Home</a>
            </Link>
            
            {user && !loading ? ([
              <Link href="/profile" key="profile">
              <a className={utilStyles.headingLg}>Profile</a>
            </Link>,
              <Link href="/api/logout" key="logout">
                <a className={utilStyles.headingLg}>Log Out</a>
              </Link>
            ]) : null }
            {!user && !loading ? (
              <Link href="/api/login">
                <a className={utilStyles.headingLg}>Log In</a>
              </Link>
            ) : null}
          </nav>
        </header>
        <main>{children}</main>
      </div>
    </UserProvider>
  );
}
