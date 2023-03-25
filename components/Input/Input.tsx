import TextField from "@mui/material/TextField"
import { useController } from "react-hook-form";

const Input = ({ control, name, type, rules, errors } : any) => {
    const {
        field: {
            value, onChange
        }
    } = useController({
        name,
        control,
        rules
    })
    return (
        <TextField
        sx={{bgcolor:"white", margin:2, width:350}}
        placeholder={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input