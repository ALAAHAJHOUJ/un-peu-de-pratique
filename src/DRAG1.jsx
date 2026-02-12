import { DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useEffect, useState } from "react";



function Item({ id }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });



  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: 10,
    border: "1px solid black",
    marginBottom: 5,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      Item {id}
    </div>
  );
}




export default function DRAG1() {
  const [items,setItems] = useState([1, 2, 3]);
  const tester=(e)=>{
   console.log(e)
  }

  return (
    <DndContext onDragEnd={tester}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((id) => (
          <Item key={id} id={id} />
        ))}
      </SortableContext>
    </DndContext>
  );
}