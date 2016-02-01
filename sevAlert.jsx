// sevAlert component - represents a single todo item
Alert = React.createClass({
  propTypes: {
    // This component gets the sevAlert to display through a React prop.
    // We can use propTypes to indicate it is required
    alert: React.PropTypes.object.isRequired,
    num: React.PropTypes.number
  },
  render() {
    return (
      <div className="sev-alert" id={'sev-alert-' + this.props.num}>{this.props.alert.text}</div>
    );
  },

  componentDidMount () {
    this.generate();
  },

  generate () {
    var chart = c3.generate({
      size: {
        width: 200,
        height: 200
      },
      bindto: '#sev-alert-' + this.props.num,
      data: {
        columns: [
          [this.props.alert.text, this.props.alert.count]
        ],
        type: 'donut'
      }
    });
  }
});
