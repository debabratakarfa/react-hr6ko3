import React from 'react';
import './style.css';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearch: '',
      todoList: []
    };
  }

  handleAddItem = () => {
    const { inputSearch, todoList } = this.state;
    if (inputSearch === '') return;
    todoList.push(inputSearch);
    this.setState({ todoList: todoList, inputSearch: '' });
  };

  handleClearAll = () => {
    this.setState({ todoList: [], inputSearch: '' });
  };

  handleDeleteItem = index => {
    const { inputSearch, todoList } = this.state;
    todoList.splice(index, 1);
    this.setState({ todoList: todoList });
  };

  render() {
    const { inputSearch, todoList } = this.state;

    return (
      <div style={{}}>
        <div className="display-flex">
          <input
            type="text"
            className="input-wrapper flex-1"
            value={inputSearch}
            onChange={e => this.setState({ inputSearch: e.target.value })}
          />
          <div
            onClick={() => this.handleAddItem()}
            className="btn-wrapper r-c-c"
          >
            <div>+</div>
          </div>
        </div>
        {todoList.length ? (
          <div>
            <div className="flex-wrap">
              {todoList.map((item, index) => (
                <div className="r-ac card-wrap">
                  <div className="flex-1">{item}</div>
                  <div
                    onClick={() => this.handleDeleteItem(index)}
                    className="btn-wrapper r-c-c btn-wrapper-hover"
                    style={{ position: 'absolute', right: 8 }}
                  >
                    <div>X</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="r-sb-c footer-wrap">
              <div> You have {todoList.length} pending tasks </div>
              <div
                onClick={() => this.handleClearAll()}
                className="btn-wrapper r-c-c clear-wrapper"
              >
                Clear All
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
