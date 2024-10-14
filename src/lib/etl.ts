import {create} from "zustand/react";
import {Keyed} from "@/lib/models";

interface CounterState {
    index: number
    increase: () => void
}

const useCounter = create<CounterState>((set) => ({
        index: 0, increase: () => set((state) => ({index: state.index + 1}))
    })
);

function* generatePacket(): Generator<Keyed> {
    const packetKey = useCounter.getState().index;
    useCounter.getState().increase();

    while (true) {
        yield {key: packetKey.toString()};
    }
}

const Graph<>
