import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { Header, SearchResults } from '../components'
import Response from '../Response'

const Search = ({ results }: any) => {
	const router = useRouter()

	return (
		<div>
			<Head>
				<title>{router.query.term} - Google Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<Header />

			{/* Search Results */}
			<SearchResults results={results} />
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { term, start } = context.query
	const query = term?.toString()
	const startIndex = start?.toString() || '0'
	const useDummyData = false
	const API_KEY = process.env.API_KEY
	const CONTEXT_KEY = process.env.CONTEXT_KEY

	const data = useDummyData
		? Response
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}&start=${startIndex}`,
		  )
				.then((response) => response.json())
				.catch()

	// After the SERVER has rendered... Pass the results to the client
	return {
		props: {
			results: data,
		},
	}
}

export default Search
