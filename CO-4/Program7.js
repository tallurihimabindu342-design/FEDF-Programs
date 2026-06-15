function withButton(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div>
        <WrappedComponent {...props} />
        <button>Click Me!</button>
      </div>
    );
  };
}

export default withButton;