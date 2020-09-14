import React from '../../web_modules/react.js';
import { View, Panel, PanelHeader, Title, Separator, Text, Div } from '../../web_modules/@vkontakte/vkui.js';
import ViewState from '../components/ViewState/ViewState.js';
export class Viewing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      id,
      donation
    } = this.props;
    const {} = this.state;
    return /*#__PURE__*/React.createElement(View, {
      id: id,
      activePanel: "main"
    }, /*#__PURE__*/React.createElement(Panel, {
      id: "main"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      separator: false
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        backgroundImage: `url(${donation?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: 140
      }
    }), donation && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Title, {
      level: "1",
      weight: "bold"
    }, donation.title), /*#__PURE__*/React.createElement(Text, {
      weight: "medium"
    }, "\u0410\u0432\u0442\u043E\u0440 ", donation.author.name), /*#__PURE__*/React.createElement(Text, {
      weight: "regular"
    }, "\u0421\u0431\u043E\u0440 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 TODO: \u0434\u043D\u0435\u0439")), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement(ViewState, null), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Text, {
      weight: "regular"
    }, donation.description)), /*#__PURE__*/React.createElement("div", null, "TODO: \u043B\u0430\u0439\u043A\u0438 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u044B \u0438 \u0442\u0434"))));
  }

}