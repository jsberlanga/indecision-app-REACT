class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToogleVisibility = this.handleToogleVisibility.bind(this)
    this.state = {
      title: 'Visibility Toggle',
      visibility: false
    }
  }
  handleToogleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToogleVisibility} className="btn">{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visibility && (<p>Here are some details.</p>)}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// const appRoot = document.getElementById('app')

// const app = {
//   title: 'Visibility Toggle',
//   visibility: false
// }

// const toggleVisibility = () => {
//   app.visibility = !app.visibility
//   render();
// }

// const render = () => {
//   const template = (

//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleVisibility} className="btn">{app.visibility ? 'Hide Details' : 'Show Details' }</button>
//       {app.visibility && (
//         <p>Here are some details.</p>
//       )}
//     </div>
//   )
//   ReactDOM.render(template, appRoot)

// }

// render();