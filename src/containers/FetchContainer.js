import React from "react";
import { connect } from "react-redux";
import { fetchLogs } from "../actions/";

import LogsComponent from "../components/Logs";
import StatsComponent from "../components/Stats";

class FetchContainer extends React.Component {
  componentWillMount() {
    this.props.fetchLogsAction();
  }
  render() {
    const { warning, info, error } = this.props.stats;
    if (this.props.error) return <div>Error loading page</div>;

    return (
      <div>
        <h1>{this.props.loading === true ? "loading..." : "Loaded"}</h1>
        <StatsComponent warning={warning} error={error} info={info} />
        <hr />
        <LogsComponent logs={this.props.logs} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.logReducer.loading,
  logs: state.logReducer.logs,
  error: state.logReducer.error,
  stats: state.logReducer.stats
});

const mapDispatchToProps = (dispatch) => ({
  fetchLogsAction: () => dispatch(fetchLogs)
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchContainer);
