import {
	SearchIcon,
	ViewGridIcon,
	MicrophoneIcon,
} from '@heroicons/react/solid'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import React, { FormEvent, useRef } from 'react'
import { Avatar, Footer } from '../components'
import logo from '../public/logo.png'

export default function Home() {
	const router = useRouter()
	const searchInputRef = useRef<HTMLInputElement>(null)

	const search = (event: FormEvent) => {
		event.preventDefault()
		const term = searchInputRef.current?.value

		if (!term) return

		router.push(`/search?term=${term}`)
	}

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<Head>
				<title>Google</title>
				<meta name="description" content="Google clone using NextJS" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<header className="flex w-full p-5 justify-between text-sm text-gray-700">
				{/* Left */}
				<div className="flex space-x-4 items-center">
					<p className="link">About</p>
					<p className="link">Store</p>
				</div>

				{/* Right */}
				<div className="flex space-x-4 items-center">
					<p className="link">Gmail</p>
					<p className="link">Images</p>

					{/* Icon */}
					<ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

					{/* Avatar */}
					<Avatar url="https://www.github.com/rafiousitou90.png" />
				</div>
			</header>

			{/* <div className="flex flex-col items-center mt-20 flex-grow"> */}
			<form
				action="#"
				onSubmit={search}
				className="flex flex-col items-center mt-20 flex-grow w-4/5"
			>
				<Image src={logo} width={300} height={100} />
				<div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
					<SearchIcon className="h-5 mr-3 text-gray-500" />
					<input
						type="text"
						className="flex-grow focus:outline-none"
						ref={searchInputRef}
					/>
					<MicrophoneIcon className="h-5 text-gray-500 cursor-pointer ml-3" />
				</div>

				<div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
					<button className="btn" type="submit">
						Google Search
					</button>
					<button className="btn" type="button">
						{`I'm Feeling Lucky`}
					</button>
				</div>
			</form>

			{/* Footer */}
			<Footer />
		</div>
	)
}
