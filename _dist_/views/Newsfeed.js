import React from '../../web_modules/react.js';
import { View, Panel, PanelHeader, Button, PanelHeaderBack, Div } from '../../web_modules/@vkontakte/vkui.js';
import SnippetDonation from '../components/SnippetDonation/SnippetDonation.js';
import { moneyFormat } from '../lib.js';
export class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      id,
      setView,
      goBack,
      donation
    } = this.props;
    const {} = this.state;
    return /*#__PURE__*/React.createElement(View, {
      id: id,
      activePanel: "main"
    }, /*#__PURE__*/React.createElement(Panel, {
      id: "main"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => goBack()
      })
    }, donation?.author.name), donation && /*#__PURE__*/React.createElement(SnippetDonation, {
      title: donation.title,
      description: `${donation.author.name}· Закончится через 5 дней`,
      progress: `Собрано ${moneyFormat(8750)} ₽ из ${moneyFormat(donation.need)} ₽`,
      value: 8750 * 100 / donation.need,
      action: /*#__PURE__*/React.createElement(Button, {
        mode: "outline"
      }, "\u041F\u043E\u043C\u043E\u0447\u044C"),
      background: /*#__PURE__*/React.createElement("div", {
        style: {
          backgroundImage: `url(${donation.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: 140
        }
      })
    }), /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Button, {
      size: "xl",
      onClick: () => setView('viewing')
    }, "\u0414\u0430\u043B\u0435\u0435"))));
  }

}