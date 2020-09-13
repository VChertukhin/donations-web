function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from '../../web_modules/react.js';
import { View, Panel, PanelHeader, Button, PanelHeaderBack } from '../../web_modules/@vkontakte/vkui.js';
import SnippetDonation from '../components/SnippetDonation/SnippetDonation.js';
import { moneyFormat } from '../lib.js';
export class Newsfeed extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "setAnimationInterval", interval => this.setState({
      animationInterval: interval
    }));

    this.state = {
      donationNeedProgress: 0,
      animationInterval: null
    };
  }

  componentDidMount() {
    const {
      donation
    } = this.props;
    const donationNeed = donation?.need || 0;
    const progressWeight = donationNeed >= 100 ? 0.02 : 0.04;
    const animationInterval = setInterval(() => {
      this.setState(prevState => ({
        donationNeedProgress: Math.floor(prevState.donationNeedProgress + donationNeed * progressWeight)
      }));
    }, 150);
    this.setAnimationInterval(animationInterval);
  }

  componentDidUpdate() {
    const {
      donation
    } = this.props;
    const donationNeed = donation?.need || 0;
    const {
      donationNeedProgress,
      animationInterval
    } = this.state;

    if (donationNeedProgress >= donationNeed && animationInterval) {
      clearInterval(animationInterval);
    }
  }

  render() {
    const {
      id,
      setView,
      goBack,
      donation
    } = this.props;
    const {
      donationNeedProgress
    } = this.state;
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
      progress: `Собрано ${moneyFormat(donationNeedProgress)} ₽ из ${moneyFormat(donation.need)} ₽`,
      value: donationNeedProgress * 100 / donation.need,
      action: /*#__PURE__*/React.createElement(Button, {
        mode: "outline",
        onClick: () => setView('viewing')
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
    })));
  }

}