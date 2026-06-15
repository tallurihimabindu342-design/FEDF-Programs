function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Component is rendering");

    return <WrappedComponent {...props} />;
  };
}

export default withLogger;