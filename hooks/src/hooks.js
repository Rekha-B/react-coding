export const useBoolean = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        setTrue: () => setValue(true),
        setFalse: () => setValue(false)
    }
}

export const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);
    return {
        count,
        setCount,
        increment: () => setCount(prev => prev+1),
        decrement: () => setCount(prev => prev-1),
        reset: () => setCount(initialValue)
    }
}