import React from 'react';
import {merge, uniqBy} from 'lodash';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoComplete: null
    };
  }

  componentDidUpdate() {
    if (this.state.autoComplete) {
      var options = {
        data: (this.state.autoComplete),
        getValue: "text",
        list: {
          match: {
            enabled: true
          }
        },
        theme: "square"
      };

      $("#search").easyAutocomplete(options);
    }
  }

  componentWillReceiveProps(newProps) {

    if (!this.state.autoComplete) {
      let autoComplete = [];
      newProps.locations.forEach(location => {
        Object.keys(location).forEach(key => {
          if (key !== 'id' && location[key]) {
            autoComplete.push({
              id: location.id,
              text: location[key]
            });
          }
        });
      });
      autoComplete = uniqBy(autoComplete, 'text');
      this.setState({autoComplete});
    }
  }

  render() {
    return(
      <div className='search-bar'>
        <div className='logo'>
          <img src='https://s13.postimg.org/aonl98xzn/movie.png'
            border='0'
            alt='postimage'/>
          <h1>
            SF Movie Map
          </h1>
        </div>
        <form onSubmit={this.props.updateMap} id='search-form'>
          <input id='search'
                 placeholder='filter map...'
                 className='search-field'/>
        </form>
      </div>
    );
  }
}

export default Search;
