// write your custom hook here to control your checkout form
import {useState} from 'react'
export const useForm = (initialState) => {
    const [value, setValue] = useState(initialState);

 
    return [value, setValue]
}