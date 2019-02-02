class ComponentsApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        This is the Header Component
      </div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <div>
        This is the Main Component
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        This is the Footer Component
      </div>
    )
  }
}

ReactDOM.render(<ComponentsApp />, document.getElementById('app'))