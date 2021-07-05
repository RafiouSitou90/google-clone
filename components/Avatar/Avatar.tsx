import React from 'react'
import Image from 'next/image'

interface AvatarProps {
	url: string
	className?: string
}

const Avatar = ({ url }: AvatarProps) => {
	function openProfile() {
		window.open('https://github.com/rafiousitou90', '_blank')
	}

	return (
		// <img
		// 	loading="lazy"
		// 	src={url}
		// 	alt="Profile picture"
		// 	className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
		// 	onClick={openProfile}
		// />

		<div className="flex items-center justify-center cursor-pointer transition duration-150 transform hover:scale-110">
			<Image
				src={url}
				alt="Profile picture"
				width={40}
				height={40}
				className="rounded-full"
				onClick={openProfile}
			/>
		</div>
	)
}

export default Avatar
