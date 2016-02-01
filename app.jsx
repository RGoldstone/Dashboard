// App component - represents the whole app
App = React.createClass({
  getAlerts () {
    return [
      { _id: 1, count: 5, text: "Alert 1" },
      { _id: 2, count: 21, text: "Alert 2" },
      { _id: 3, count: 263, text: "Alert 3" }
    ];
  },

  renderAlerts () {
    return this.getAlerts().map((alert,index) => {
      return <Alert key={alert._id} alert={alert} num={index} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Alert Dashboard</h1>
        </header>

        <div className="sev-alerts">
          {this.renderAlerts()}
        </div>
      </div>
    );
  }
});
