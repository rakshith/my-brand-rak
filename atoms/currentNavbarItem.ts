import { atom } from 'recoil'

export const currentNavbarItemAtom = atom({
  key: 'currentNavbarItemState',
  default: 'HOME',
})
