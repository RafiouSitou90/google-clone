import React from 'react'
import {} from '@heroicons/react/solid'

interface HeaderOptionProps {
	Icon: any
	title: string
	selected?: boolean
}

const HeaderOption = ({ Icon, title, selected }: HeaderOptionProps) => {
	return (
		<div
			className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 cursor-pointer pb-3 ${
				selected && 'text-blue-500 border-blue-500'
			}`}
		>
			<Icon className="h-4" />
			<p className="hidden sm:inline-flex">{title}</p>
		</div>
	)
}

export default HeaderOption
