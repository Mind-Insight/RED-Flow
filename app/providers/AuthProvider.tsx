import * as Splash from "expo-splash-screen"
import type { IUser } from "@/types/user.interface"
import {
	createContext,
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState,
} from "react"
import { Text, View } from "react-native"

export type TypeUserState = IUser | null

interface IContext {
	user: TypeUserState
	setUser: Dispatch<SetStateAction<TypeUserState>>
}

export const AuthContext = createContext({} as IContext)

let ignore = Splash.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)

	useEffect(() => {
		// Get user from async storage and write to store
	}, [])
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
