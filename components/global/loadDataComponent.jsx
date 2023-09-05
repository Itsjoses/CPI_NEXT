import React from 'react'

export default function LoadDataComponent({children,data}) {
  return (
    <>
      {!data ? <></> : children}
    </>
  )
}
