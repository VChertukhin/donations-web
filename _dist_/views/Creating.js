function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from '../../web_modules/react.js';
import { View, Panel, PanelHeader, Placeholder, Button, PanelHeaderBack, Banner, Div, FormLayout, Input, Textarea, SelectMimicry, FormLayoutGroup, Radio, List, SimpleCell, Avatar } from '../../web_modules/@vkontakte/vkui.js';
import { Icon28TargetOutline, Icon28CalendarOutline, Icon28PictureOutline, Icon24Done } from '../../web_modules/@vkontakte/icons.js';
import CoverLoader from '../components/CoverLoader/CoverLoader.js';
import SnippetDonation from '../components/SnippetDonation/SnippetDonation.js';
const defaultAuthors = [{
  id: 150337771,
  name: 'Матвей Правосудов',
  photo_100: 'https://sun9-39.userapi.com/impf/c639623/v639623662/4d9db/HVnCQZZ0dJQ.jpg?size=100x0&quality=88&crop=677,325,1354,1354&sign=fb6648ed604b90d8ddba864f45d0aae9&c_uniq_tag=Fbfu_i2o13FAWIkgTXQYCRYBazI8QsiYCbjqktcZpbk&ava=1'
}, {
  id: -197700721,
  name: 'Вездекод | Хакатон ВКонтакте',
  photo_100: 'https://sun9-76.userapi.com/impg/e05bG7K5clW9_qVhE4FQCeYOnTHFTopoNhVH8g/bNJz6lwiUKs.jpg?size=100x0&quality=88&crop=0,0,800,800&sign=691aa9921163e0f1329b4f30900fd5b0&c_uniq_tag=ZuLyWUaJuOdvX7yQMU6PxVu7M356mxmSNXjUNbbWsPI&ava=1'
}];
const defaultDonationRegular = {
  type: 'regular',
  title: '',
  image: '',
  need: 0,
  target: '',
  description: '',
  cashAccount: {
    name: 'Счёт VK Pay · 1234'
  },
  author: defaultAuthors[0],
  finish: undefined
};
const defaultDonationTarget = {
  type: 'target',
  title: '',
  image: '',
  need: 0,
  target: '',
  description: '',
  cashAccount: {
    name: 'Счёт VK Pay · 1234'
  },
  author: defaultAuthors[0]
};
export class Creating extends React.Component {
  constructor(props) {
    super(props); // TODO: нужно подгрузить реального пользователя

    _defineProperty(this, "setDonation", donation => {
      const newDonation = Object.assign({}, this.state.donation, donation);
      this.setState({
        donation: newDonation
      });
    });

    this.state = {
      donation: props.donation || defaultDonationRegular
    };
    this.create = this.create.bind(this);
    this.choseAuthor = this.choseAuthor.bind(this);
  }

  choseAuthor(user) {
    this.setDonation({
      author: user
    });
    this.props.goBack();
  }

  get authors() {
    // TODO: необходимо подгружать реальных
    return defaultAuthors;
  }

  create(type) {
    switch (type) {
      case 'target':
        this.setState({
          donation: defaultDonationTarget
        });
        this.props.setPanel('target');
        break;

      case 'regular':
        this.setState({
          donation: defaultDonationRegular
        });
        this.props.setPanel('regular');
        break;
    }
  }

  createTarget() {
    this.setState({
      donation: defaultDonationTarget
    });
  }

  render() {
    const {
      id,
      activePanel,
      setPanel,
      goBack,
      finishText,
      updateDonation
    } = this.props;
    const {
      donation
    } = this.state;
    return /*#__PURE__*/React.createElement(View, {
      id: id,
      activePanel: activePanel
    }, /*#__PURE__*/React.createElement(Panel, {
      id: "main"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => goBack()
      })
    }, "\u0422\u0438\u043F \u0441\u0431\u043E\u0440\u0430"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Banner, {
      before: /*#__PURE__*/React.createElement(Icon28TargetOutline, {
        fill: "var(--accent)"
      }),
      header: "\u0426\u0435\u043B\u0435\u0432\u043E\u0439 \u0441\u0431\u043E\u0440",
      subheader: "\u041A\u043E\u0433\u0434\u0430 \u0435\u0441\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u0430\u044F \u0446\u0435\u043B\u044C",
      asideMode: "expand",
      onClick: () => this.create('target'),
      style: {
        marginTop: 8,
        marginBottom: 4
      }
    }), /*#__PURE__*/React.createElement(Banner, {
      before: /*#__PURE__*/React.createElement(Icon28CalendarOutline, {
        fill: "var(--accent)"
      }),
      header: "\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u044B\u0439 \u0441\u0431\u043E\u0440",
      subheader: "\u0415\u0441\u043B\u0438 \u043F\u043E\u043C\u043E\u0449\u044C \u043D\u0443\u0436\u043D\u0430 \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E",
      asideMode: "expand",
      onClick: () => this.create('regular'),
      style: {
        marginTop: 8,
        marginBottom: 4
      }
    }))), /*#__PURE__*/React.createElement(Panel, {
      id: "target"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      separator: false,
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => {
          goBack();
        }
      })
    }, "\u0426\u0435\u043B\u0435\u0432\u043E\u0439 \u0441\u0431\u043E\u0440"), /*#__PURE__*/React.createElement(Div, {
      style: {
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement(CoverLoader, {
      title: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u0443",
      before: /*#__PURE__*/React.createElement(Icon28PictureOutline, null),
      image: donation.image,
      onLoadImage: image => this.setDonation({
        image: image
      }),
      onDismiss: () => this.setDonation({
        image: ''
      })
    })), /*#__PURE__*/React.createElement(FormLayout, null, /*#__PURE__*/React.createElement(Input, {
      top: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0431\u043E\u0440\u0430",
      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0431\u043E\u0440\u0430",
      value: donation.title,
      onChange: e => this.setDonation({
        title: e.target.value
      })
    }), /*#__PURE__*/React.createElement(Input, {
      type: "number",
      top: "\u0421\u0443\u043C\u043C\u0430, \u20BD",
      placeholder: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C?",
      value: donation.need || undefined,
      onChange: e => this.setDonation({
        need: parseFloat(e.target.value)
      })
    }), /*#__PURE__*/React.createElement(Input, {
      top: "\u0426\u0435\u043B\u044C",
      placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430",
      value: donation.target,
      onChange: e => this.setDonation({
        target: e.target.value
      })
    }), /*#__PURE__*/React.createElement(Textarea, {
      top: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
      placeholder: "\u041D\u0430 \u0447\u0442\u043E \u043F\u043E\u0439\u0434\u0443\u0442 \u0434\u0435\u043D\u044C\u0433\u0438 \u0438 \u043A\u0430\u043A \u043E\u043D\u0438 \u043F\u043E\u043C\u043E\u0433\u0443\u0442?",
      value: donation.description,
      onChange: e => this.setDonation({
        description: e.target.value
      })
    }), /*#__PURE__*/React.createElement(SelectMimicry, {
      top: "\u041A\u0443\u0434\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438",
      placeholder: "\u0421\u0447\u0451\u0442",
      onClick: () => setPanel('vkpay')
    }, donation.cashAccount.name)), /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Button, {
      size: "xl",
      onClick: () => setPanel('target2')
    }, "\u0414\u0430\u043B\u0435\u0435"))), /*#__PURE__*/React.createElement(Panel, {
      id: "target2"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => goBack()
      })
    }, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E"), /*#__PURE__*/React.createElement(FormLayout, null, /*#__PURE__*/React.createElement(SelectMimicry, {
      top: "\u0410\u0432\u0442\u043E\u0440",
      placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0432\u0442\u043E\u0440\u0430",
      onClick: () => setPanel('author')
    }, donation.author.name), /*#__PURE__*/React.createElement(FormLayoutGroup, {
      top: "\u0421\u0431\u043E\u0440 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044F"
    }, /*#__PURE__*/React.createElement(Radio, {
      name: "type"
    }, "\u041A\u043E\u0433\u0434\u0430 \u0441\u043E\u0431\u0435\u0440\u0435\u043C \u0441\u0443\u043C\u043C\u0443"), /*#__PURE__*/React.createElement(Radio, {
      name: "type",
      defaultChecked: true
    }, "\u0412 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u0443\u044E \u0434\u0430\u0442\u0443")), /*#__PURE__*/React.createElement(SelectMimicry, {
      top: "\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F",
      placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443"
    })), /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Button, {
      size: "xl",
      onClick: () => setPanel('posting')
    }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0431\u043E\u0440"))), /*#__PURE__*/React.createElement(Panel, {
      id: "regular"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      separator: false,
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => {
          goBack();
        }
      })
    }, "\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u044B\u0439 \u0441\u0431\u043E\u0440"), /*#__PURE__*/React.createElement(Div, {
      style: {
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement(CoverLoader, {
      title: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u0443",
      before: /*#__PURE__*/React.createElement(Icon28PictureOutline, null),
      image: donation.image,
      onLoadImage: image => this.setDonation({
        image: image
      }),
      onDismiss: () => this.setDonation({
        image: ''
      })
    })), /*#__PURE__*/React.createElement(FormLayout, null, /*#__PURE__*/React.createElement(Input, {
      top: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0431\u043E\u0440\u0430",
      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0431\u043E\u0440\u0430",
      value: donation.title,
      onChange: e => this.setDonation({
        title: e.target.value
      })
    }), /*#__PURE__*/React.createElement(Input, {
      top: "\u0421\u0443\u043C\u043C\u0430 \u0432 \u043C\u0435\u0441\u044F\u0446, \u20BD",
      type: "number",
      placeholder: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u0443\u0436\u043D\u043E \u0432 \u043C\u0435\u0441\u044F\u0446?",
      value: donation.need || undefined,
      onChange: e => this.setDonation({
        need: parseFloat(e.target.value)
      })
    }), /*#__PURE__*/React.createElement(Input, {
      top: "\u0426\u0435\u043B\u044C",
      placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043F\u0440\u0438\u044E\u0442\u0430",
      value: donation.target,
      onChange: e => this.setDonation({
        target: e.target.value
      })
    }), /*#__PURE__*/React.createElement(Textarea, {
      top: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
      placeholder: "\u041D\u0430 \u0447\u0442\u043E \u043F\u043E\u0439\u0434\u0443\u0442 \u0434\u0435\u043D\u044C\u0433\u0438 \u0438 \u043A\u0430\u043A \u043E\u043D\u0438 \u043F\u043E\u043C\u043E\u0433\u0443\u0442?",
      value: donation.description,
      onChange: e => this.setDonation({
        description: e.target.value
      })
    }), /*#__PURE__*/React.createElement(SelectMimicry, {
      top: "\u041A\u0443\u0434\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438",
      placeholder: "\u0421\u0447\u0451\u0442",
      onClick: () => setPanel('vkpay')
    }, donation.cashAccount.name), /*#__PURE__*/React.createElement(SelectMimicry, {
      top: "\u0410\u0432\u0442\u043E\u0440",
      placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0432\u0442\u043E\u0440\u0430",
      onClick: () => setPanel('author')
    }, donation.author.name)), /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Button, {
      size: "xl",
      onClick: () => setPanel('posting')
    }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0431\u043E\u0440"))), /*#__PURE__*/React.createElement(Panel, {
      id: "author"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => goBack()
      })
    }, "\u0410\u0432\u0442\u043E\u0440"), /*#__PURE__*/React.createElement(List, null, this.authors.map(user => /*#__PURE__*/React.createElement(SimpleCell, {
      before: /*#__PURE__*/React.createElement(Avatar, {
        size: 40,
        src: user.photo_100
      }),
      after: donation.author.id === user.id ? /*#__PURE__*/React.createElement(Icon24Done, null) : null,
      key: user.id,
      onClick: () => this.choseAuthor(user)
    }, user.name)))), /*#__PURE__*/React.createElement(Panel, {
      id: "vkpay"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      separator: true
    }, "VK Pay"), /*#__PURE__*/React.createElement(Placeholder, {
      action: /*#__PURE__*/React.createElement(Button, {
        size: "l",
        onClick: () => goBack()
      }, "\u041D\u0430\u0437\u0430\u0434"),
      stretched: true
    }, "\u0417\u0430\u0433\u043B\u0443\u0448\u043A\u0430.", /*#__PURE__*/React.createElement("br", null), "\u041A\u0430\u043A \u0438 \u043F\u0440\u043E\u0441\u0438\u043B\u0438.")), /*#__PURE__*/React.createElement(Panel, {
      id: "posting"
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => goBack()
      })
    }, donation.author.name), /*#__PURE__*/React.createElement(SnippetDonation, {
      title: donation.title,
      description: `${donation.author.name}· Закончится через 5 дней`,
      progress: "\u041F\u043E\u043C\u043E\u0433\u0438 \u043F\u0435\u0440\u0432\u044B\u043C",
      value: 0,
      action: /*#__PURE__*/React.createElement(Button, {
        mode: "outline",
        disabled: true
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
      onClick: () => updateDonation(donation)
    }, finishText || 'Опубликовать'))));
  }

}