import React, { Component } from "react";
import "./style.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  onChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    alert(this.state.name);// 
    this.setState({
        name:''
    })
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>สสจ.พิษณุโลก</h1>
        <div style={{ backgroundColor: "lime" }}>งานเทคโนโลยีสารสนเทศ</div>
        <div className="red">อุเทน</div>
        <div>{this.props.myname}</div>
        <div>
          <form onSubmit={this.onSubmit}>
            <input value={name} onChange={this.onChange} />
            <button>OK</button>
          </form>
        </div>
        <div>{name}</div>
      </div>
    );
  }
}
