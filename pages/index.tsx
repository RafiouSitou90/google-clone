import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Google</title>
				<meta name="description" content="Google clone using NextJS" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</div>
	)
}
