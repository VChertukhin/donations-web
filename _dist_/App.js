import React from '../web_modules/react.js';
import { Root } from '../web_modules/@vkontakte/vkui.js';
import '../web_modules/@vkontakte/vkui/dist/vkui.css.proxy.js';
import './components/SnippetDonation/SnippetDonation.css.proxy.js';
import './components/CoverLoader/CoverLoader.css.proxy.js';
import { Viewing } from './views/Viewing.js';
import { Main } from './views/Main.js';
import { Creating } from './views/Creating.js';
import { Newsfeed } from './views/Newsfeed.js';
const authors = [{
  id: 150337771,
  name: 'Матвей Правосудов',
  photo_100: 'https://sun9-39.userapi.com/impf/c639623/v639623662/4d9db/HVnCQZZ0dJQ.jpg?size=100x0&quality=88&crop=677,325,1354,1354&sign=fb6648ed604b90d8ddba864f45d0aae9&c_uniq_tag=Fbfu_i2o13FAWIkgTXQYCRYBazI8QsiYCbjqktcZpbk&ava=1'
}, {
  id: -197700721,
  name: 'Вездекод | Хакатон ВКонтакте',
  photo_100: 'https://sun9-76.userapi.com/impg/e05bG7K5clW9_qVhE4FQCeYOnTHFTopoNhVH8g/bNJz6lwiUKs.jpg?size=100x0&quality=88&crop=0,0,800,800&sign=691aa9921163e0f1329b4f30900fd5b0&c_uniq_tag=ZuLyWUaJuOdvX7yQMU6PxVu7M356mxmSNXjUNbbWsPI&ava=1'
}];
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scheme: 'bright_light',
      activeView: 'main',
      activePanel: {
        main: 'main'
      },
      history: [{
        view: 'main',
        panel: 'main'
      }]
    };
    this.setView = this.setView.bind(this);
    this.setPanel = this.setPanel.bind(this);
    this.goBack = this.goBack.bind(this);
    this.updateDonation = this.updateDonation.bind(this);
  }

  componentDidMount() {
    this.props.vkAPI.onUpdateConfig(data => {
      const schemeAttribute = document.createAttribute('scheme');
      schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
      this.setState({
        scheme: data.scheme
      });
      document.body.attributes.setNamedItem(schemeAttribute);
    });
    this.props.vkAPI.initApp();
  }

  setView(view, name = 'main') {
    const panel = { ...this.state.activePanel
    };
    panel[view] = name;
    const newHistory = [...this.state.history, {
      view: view,
      panel: name
    }];
    this.setState({
      activeView: view,
      activePanel: panel,
      history: newHistory
    });
  }

  setPanel(name) {
    const panel = { ...this.state.activePanel
    };
    panel[this.state.activeView] = name;
    const newHistory = [...this.state.history, {
      view: this.state.activeView,
      panel: name
    }];
    this.setState({
      activePanel: panel,
      history: newHistory
    });
  }

  goBack() {
    const newHistory = [...this.state.history];
    newHistory.pop();
    const {
      view,
      panel
    } = newHistory[newHistory.length - 1];
    const p = { ...this.state.activePanel
    };
    p[view] = panel;
    this.setState({
      activeView: view,
      activePanel: p,
      history: newHistory
    });
  }

  updateDonation(d) {
    this.setState({
      donation: d
    });
    this.setView('newsfeed');
  }

  render() {
    const {
      activeView,
      activePanel,
      donation
    } = this.state;
    return /*#__PURE__*/React.createElement(Root, {
      activeView: activeView
    }, /*#__PURE__*/React.createElement(Main, {
      id: "main",
      activePanel: activePanel['main'],
      setView: this.setView
    }), /*#__PURE__*/React.createElement(Creating, {
      id: "creating",
      activePanel: activePanel['creating'],
      setView: this.setView,
      setPanel: this.setPanel,
      goBack: this.goBack,
      updateDonation: this.updateDonation
    }), /*#__PURE__*/React.createElement(Newsfeed, {
      id: "newsfeed",
      setView: this.setView,
      goBack: this.goBack,
      donation: donation
    }), /*#__PURE__*/React.createElement(Viewing, {
      id: "viewing",
      donation: donation,
      goBack: this.goBack
    }));
  }

}