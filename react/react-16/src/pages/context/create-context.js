import React, { createContext } from 'react'

export const ThemeContext = createContext({
    ctxName: 'ThemeContext',
    fontSize: 12,
    enlardge() { },
    reduce() { }
})

