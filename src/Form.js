import React from 'react';
class Form extends React.Component {
  submitFormHandler(e) {
    e.preventDefault();
    
    for (let ref in this.refs) {
      console.log(ref, this.refs[ref].value);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitFormHandler.bind(this)}>
          <div>
            <h1></h1>
            <>PAIS</>
            <input type="text" name="PAIS" ref="PAIS" />
            <h1></h1>
            <>CAPITAL</>
            <input type="text" name="CAPITAL" ref="CAPITAL" /><br/>
            <h1></h1>
            <button type="submit">MOSTRAR EN CONSOLA</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;