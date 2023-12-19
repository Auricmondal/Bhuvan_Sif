import { create } from 'zustand'

const useHamMenu = create((set) => ({
    isOpen: false,
    onOpen: () =>set({ isOpen: true}),
    onClose: () =>set ({isOpen : false})
}))

export default useHamMenu;