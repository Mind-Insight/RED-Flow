import { TypeNav } from "./menu.interface"
import { FC } from "react"
import { Text, View } from "react-native"
import { menuData } from "./menu.data"
import MenuItem from "./MenuItem"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface IBottomMenu {
	nav: TypeNav
	currentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = ({ currentRoute, nav }) => {
    const {bottom} = useSafeAreaInsets()
	return (
		<View
            className="pt-5 px-3 flex-row justify-between items-center w-full bg-[#1e1c2e]"
            style={{
                paddingBottom: bottom + 20
            }}>
			{menuData.map(item => (
				<MenuItem
					nav={nav}
					item={item}
					currentRoute={currentRoute}
					key={item.path}
				/>
			))}
		</View>
	)
}

export default BottomMenu
