import './App.css';
import React from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         txtName: "a",
         txtPassword: "123",
         txtDescription: "",
         gender: 0,
         rdLang: "VN",
         chk: false,
      }
   }

   onHandleChange = (event) => {
      var target = event.target;
      var name = target.name;
      var value = target.type === 'checkbox' ? target.checked : target.value;

      this.setState({
         [name]: value,
      })
   }

   onHandlerSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
   }

   render() {
      return (
         <>
         <div>
            <div className="container">
               <form className="text-center" onSubmit={this.onHandlerSubmit}>
                  Username: <input type="text" name="txtName" onChange={this.onHandleChange} value={this.state.txtName}></input><br></br>
                  Password: <input type="password" name="txtPassword" onChange={this.onHandleChange} value={this.state.txtPassword}></input><br></br>
                  Description: <textarea name="txtDescription" onChange={this.onHandleChange}></textarea><br></br>

                  <select name="gender" value={this.state.gender} onChange={this.onHandleChange}>
                     <option value={0}>Male</option>
                     <option value={1} >Female</option>
                  </select>
                  <br></br>

                  <label>language</label>
                  <div>
                     <label>VN
                     <input type="radio" name="rdLang" value="VN" onChange={this.onHandleChange} checked={this.state.rdLang === "VN"}/>
                     </label>

                     <label>EN
                     <input type="radio" name="rdLang" value="EN" onChange={this.onHandleChange} checked={this.state.rdLang === "EN"}/>
                     </label>
                  </div>

                  <div>
                     Check box <input type="checkbox" name="chk" value={true} onChange={this.onHandleChange}/>
                  </div>

                  <button className="" type="submit">Save</button>&nbsp;
                  <button className="" type="reset">Delete</button>
               </form>

            </div>
         </div>
         </>
      );
   }

}

export default App;
