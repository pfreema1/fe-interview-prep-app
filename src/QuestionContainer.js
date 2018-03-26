import React, { Component } from 'react';

class QuestionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      shrinkWrapper: false,
      hideText: false
    };
  }

  componentDidMount() {
    fetch(
      'http://front-end-questions-app.us-east-1.elasticbeanstalk.com/randomQuestion',
      { method: 'get', mode: 'cors' }
    )
      .then(res => res.json())
      .then(res => this.setState({ question: res.question }));
  }

  getQuestion = () => {
    this.setState({ shrinkWrapper: true, hideText: true }, () => {
      fetch(
        'http://front-end-questions-app.us-east-1.elasticbeanstalk.com/randomQuestion',
        { method: 'get', mode: 'cors' }
      )
        .then(res => res.json())
        .then(res => {
          setTimeout(() => {
            this.setState(
              { question: res.question, shrinkWrapper: false },
              () => {
                setTimeout(() => {
                  this.setState({ hideText: false });
                }, 500);
              }
            );
          }, 500);
        });
    });
  };

  render() {
    const { shrinkWrapper, hideText } = this.state;

    return (
      <div className="question-container">
        <div
          className={
            'question-outer-wrapper ' + (shrinkWrapper ? 'shrink' : '')
          }
        >
          <div className={'question-inner-wrapper ' + (hideText ? 'hide' : '')}>
            {this.state.question}
          </div>
        </div>
        <button onClick={this.getQuestion}>ima button</button>
      </div>
    );
  }
}

export default QuestionContainer;
