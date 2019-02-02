// JSX - JavaScript XML

const app = {
  title: 'Indecision Application',
  subtitle: 'This is a React Application',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render(); 
  }
}

const onRemoveAll = () => {
  app.options = [];
  render();
}

const onMakeDecision = () => {
  let randomNumber = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNumber];
  console.log(option)
  // app.options.splice(randomNumber, 1)
  // render();
}

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000]

const render = () => {
  const template = (
    <div>
      <h1>{app.title.toUpperCase()}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? `Here are you options ${app.options}` : 'No options'}</p>
      <button disabled={app.options.length == 0} onClick={onMakeDecision} className="btn">What should I do?</button>
      <button onClick={onRemoveAll} className="btn">Remove All</button>
      <ol>
        {app.options.map((option) => {
            return <li key={option}>{option}</li>
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
      <input type="text" name="option" className="input"/>
      <button className="btn">Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render();