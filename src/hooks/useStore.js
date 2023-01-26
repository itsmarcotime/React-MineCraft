import create from 'zustand'
import { nanoid } from 'nanoid'

export const useStore = create((set) => ({
    texture: 'dirt',
    cubes: [
        {
            key: nanoid(),
            pos: [10, 0.5, 10],
            texture: 'dirt',
        },
        {
            key: nanoid(),
            pos: [1, 0.5, 0],
            texture: 'glass',
        }
    ],
    addCube: (x,y,z) => {
        set((prev) => ({
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    pos: [x, y, z],
                    texture: prev.texture
                }
            ]
        }))
    },
    removeCube: () => {},
    setTexture: () => {},
    saveWorld: () => {},
    resetWorld: () => {},
}))