import React, { useEffect } from 'react'
import { NextPage, NextPageContext } from 'next'

type Props = {
  text: string,
}

const Test: NextPage<Props> = ({ text }) => {
  useEffect(() => {
  })

  return (
    <div>
      <h1>Posts in "{text}"</h1>
    </div>
  )
}

Test.getInitialProps = async () => {

  return {
    text: 'Test text',
  }
}

export default Test
