// Mostly code from reactjs.org/docs/error-boundaries.html
import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  static getDerivedStateFromError() {
    return { hasError: true, redirect: false };
  }

  state = { hasError: false };

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was en error with this Listing. <Link to="/">Click Here</Link>{" "}
          to go back home or wait five seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
