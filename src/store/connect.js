import React from "react";
import PropTypes from "prop-types";

export const connect = (mapStateToProps, mapDispatchToProps) => Component => {
    class WrappedComponent extends React.Component {
      render() {
        return (
          <Component
            {...this.props}
            {...mapStateToProps(this.context.store.getState(), this.props)}
            {...mapDispatchToProps(this.context.store.dispatch, this.props)}
          />
        );
      }
  
      componentDidMount() {
        this.context.store.subscribe(this.handleChange);
      }
  
      handleChange = () => {
        this.forceUpdate();
      };
    }
  
    WrappedComponent.contextTypes = {
      store: PropTypes.object
    };
  
    return WrappedComponent;
  };

