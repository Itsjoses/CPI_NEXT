import React from 'react'
import ThemeComponent from './themeComponent'

export default function DatabaseComponents({children}) {
  return (
    <ThemeComponent>
        {children}
    </ThemeComponent>
  )
}
