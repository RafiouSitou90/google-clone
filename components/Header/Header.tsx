import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FormEvent, useRef } from 'react'
import logo from '../../public/logo.png'
import Avatar from '../Avatar'
import HeaderOptions from '../HeaderOptions'

const Header = () => {
	const router = useRouter()
	const searchInputRef = useRef<HTMLInputElement>(null)
	// const { term } = router.query

	function clearInput() {
		if (searchInputRef.current) {
			searchInputRef.current.value = ''
		}
	}

	function search(event: FormEvent) {
		event.preventDefault()
		const term = searchInputRef.current?.value

		if (!term) return

		router.push(`/search?term=${term}`)
	}

	return (
		<header className="sticky top-0 bg-white">
			<div className="flex w-full p-6 items-center">
				<Image
					className="cursor-pointer"
					src={logo}
					width={120}
					height={40}
					onClick={() => router.push('/')}
				/>

				<form
					className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center"
					action="#"
				>
					<input
						className="flex-grow w-full focus:outline-none"
						ref={searchInputRef}
						type="text"
						// defaultValue={term}
					/>

					<XIcon
						className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
						onClick={clearInput}
					/>

					<MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300 pl-4 cursor-pointer" />
					<SearchIcon className="h-6 hidden text-blue-500 sm:inline-flex cursor-pointer" />

					<button hidden type="submit" onClick={search}>
						Search
					</button>
				</form>

				<Avatar
					className="ml-auto"
					url="https://github.com/rafiousitou90.png"
				/>
			</div>

			{/* Header Options */}
			<HeaderOptions />
		</header>
	)
}

export default Header
