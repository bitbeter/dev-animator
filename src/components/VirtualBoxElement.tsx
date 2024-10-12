import {VirtualBox} from "@/lib/models";

export function VirtualBoxElement({value}: { value: VirtualBox }) {
    const {x, y} = value;

    return (
        <div
            style={{transform: `translateX(${x}px) translateY(${y}px)`}}
            className="absolute rounded-3xl size-8 p-1 bg-red-500">
        </div>
    );
}
