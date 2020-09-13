import React from '../web_modules/react.js';
import { Root } from '../web_modules/@vkontakte/vkui.js';
import '../web_modules/@vkontakte/vkui/dist/vkui.css.proxy.js';
import './components/SnippetDonation/SnippetDonation.css.proxy.js';
import './components/CoverLoader/CoverLoader.css.proxy.js';
import { Viewing } from './views/Viewing.js';
import { Main } from './views/Main.js';
import { Creating } from './views/Creating.js';
import { Newsfeed } from './views/Newsfeed.js';
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
      setView: (view, name) => this.setView(view, name)
    }), /*#__PURE__*/React.createElement(Creating, {
      id: "creating",
      activePanel: activePanel['creating'],
      setView: (view, name) => this.setView(view, name),
      setPanel: name => this.setPanel(name),
      goBack: () => this.goBack(),
      updateDonation: d => this.updateDonation(d)
    }), /*#__PURE__*/React.createElement(Newsfeed, {
      id: "newsfeed",
      setView: (view, name) => this.setView(view, name),
      goBack: () => this.goBack(),
      donation: donation
    }), /*#__PURE__*/React.createElement(Viewing, {
      id: "viewing",
      donation: donation,
      goBack: () => this.goBack()
    }));
  }

}