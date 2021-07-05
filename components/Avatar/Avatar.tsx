import React from 'react'

interface AvatarProps {
	url: string
}

const Avatar = ({ url }: AvatarProps) => {
	return (
		<img
			loading="lazy"
			src={url}
			alt="Profile picture"
			className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
		/>
	)
}

export default Avatar