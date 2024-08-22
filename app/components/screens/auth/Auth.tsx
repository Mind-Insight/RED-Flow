import { FC, useState } from "react"
import { useForm } from "react-hook-form"
import { Text, View } from "react-native"
import { IAuthFormData } from "./auth.interface"

const Auth: FC = () => {
    const [isReg, setIsReg] = useState(false)

    const {} = useForm<IAuthFormData>({
        mode: "onChange"
    })

	return (
		<View>
			<Text>Auth</Text>
		</View>
	)
}

export default Auth
