var React = require('react');

class Home extends React.Component {

  render() {
    var bootstrap = 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
    console.log(this.props.pokemons)
    const pokemons = this.props.pokemon.map( obj => {
      var name = obj.name
      var idURL= 'pokemon/' + obj.id
      return <li><a href={idURL}>{name}</a></li>
    });

    return (
    <html>
    <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
    </head>
    <body>
      <div class='container'>
      <h1>Welcome to the online Pokedex</h1>
        <form action='/'>
          <select name='sortby'>
            <option value=''>Sort by</option>
            <option value='name'>Name</option>
            <option value='id'>Id Number</option>
            <option value='weight'>Weight</option>
            <option value='height'>Height</option>
          </select><br/><br/>
          <input type='submit' value='Submit'/><br/><br/>
        </form>
        <ul>
        {pokemons}
        </ul>
      </div></body></html>
    );
  }
}

module.exports = Home;