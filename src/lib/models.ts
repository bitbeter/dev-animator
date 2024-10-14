export type Keyed = { key: string }

export type Position = Keyed & { x: number, y: number };

export type Particle = Position & { color?: string };

export type VirtualBox = Position & { color?: string };
