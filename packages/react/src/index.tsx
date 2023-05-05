import { styled } from "./styles"

const Button = styled('button', {
    fontFamily: "$default",
    backgroundColor: "$ignite500",
    border: "$md",
    padding: "$4",
})

export function App() {
    return (
        <Button>
            hello world
        </Button>
    )
}
