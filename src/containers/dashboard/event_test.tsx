import React from "react"

const Index = () => {
    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event)
    }

return(
    <div draggable onDragStart={onDragStart}>Drag me!</div>
)
}
export default Index