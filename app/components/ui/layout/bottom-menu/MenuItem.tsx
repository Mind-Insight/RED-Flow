import { FC } from "react"
import {Feather } from "@expo/vector-icons"
import { View, Text, Pressable } from "react-native"
import type { TypeNav, IMenuItem } from "./menu.interface"
import { AppConstants } from "@/app.constants"

interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNav
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ currentRoute, nav, item }) => {
	const isActive = currentRoute === item.path

	return (
		<Pressable className="w-[24%] items-center" onPress={() => nav(item.path)}>
			<Feather
				name={item.iconName}
				size={26}
				color={isActive ? AppConstants.primary : "#8d8a97"}
			>
			</Feather>
		</Pressable>
	)
}

export default MenuItem
