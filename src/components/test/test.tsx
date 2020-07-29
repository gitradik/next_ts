import React from 'react'

interface TestProps {
  title: string
}

export default class Test extends React.Component {
  constructor(props: TestProps) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <>
        <div>Test Component</div>
      </>
    )
  }

  componentDidMount() {}
}
