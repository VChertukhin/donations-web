import React from 'react';
import { Root } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import type {
  AppearanceSchemeType,
  UpdateConfigData,
} from '@vkontakte/vk-bridge';
import type { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';

import './components/SnippetDonation/SnippetDonation.css';

import './components/CoverLoader/CoverLoader.css';
import type { Donation } from './types';
import { Viewing } from './views/Viewing';
import { Main } from './views/Main';
import { Creating } from './views/Creating';
import { Newsfeed } from './views/Newsfeed';

interface AppState {
  scheme: AppearanceSchemeType;
  activeView: string;
  activePanel: { [id: string]: string };
  history: Array<{ view: string; panel: string }>;

  donation?: Donation;
}

export interface AppProps {
  vkAPI: VKMiniAppAPI;
  mobile: boolean;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      scheme: 'bright_light',
      activeView: 'main',
      activePanel: { main: 'main' },
      history: [{ view: 'main', panel: 'main' }],
    };

    this.setView = this.setView.bind(this);
    this.setPanel = this.setPanel.bind(this);
    this.goBack = this.goBack.bind(this);

    this.updateDonation = this.updateDonation.bind(this);
  }

  componentDidMount(): void {
    this.props.vkAPI.onUpdateConfig((data: UpdateConfigData) => {
      const schemeAttribute = document.createAttribute('scheme');
      schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
      this.setState({ scheme: data.scheme });
      document.body.attributes.setNamedItem(schemeAttribute);
    });

    this.props.vkAPI.initApp();
  }

  setView(view: string, name = 'main'): void {
    const panel = { ...this.state.activePanel };
    panel[view] = name;

    const newHistory = [...this.state.history, { view: view, panel: name }];

    this.setState({
      activeView: view,
      activePanel: panel,
      history: newHistory,
    });
  }

  setPanel(name: string): void {
    const panel = { ...this.state.activePanel };
    panel[this.state.activeView] = name;

    const newHistory = [
      ...this.state.history,
      { view: this.state.activeView, panel: name },
    ];

    this.setState({ activePanel: panel, history: newHistory });
  }

  goBack(): void {
    const newHistory = [...this.state.history];
    newHistory.pop();
    const { view, panel } = newHistory[newHistory.length - 1];

    const p = { ...this.state.activePanel };
    p[view] = panel;

    this.setState({
      activeView: view,
      activePanel: p,
      history: newHistory,
    });
  }

  updateDonation(d: Donation) {
    this.setState({ donation: d });
    this.setView('newsfeed');
  }

  render(): JSX.Element {
    const { activeView, activePanel, donation } = this.state;

    return (
      <Root activeView={activeView}>
        <Main
          id="main"
          activePanel={activePanel['main']}
          setView={(view, name) => this.setView(view, name)}
        />
        <Creating
          id="creating"
          activePanel={activePanel['creating']}
          setView={(view, name) => this.setView(view, name)}
          setPanel={(name) => this.setPanel(name)}
          goBack={() => this.goBack()}
          updateDonation={(d) => this.updateDonation(d)}
        />

        <Newsfeed
          id="newsfeed"
          setView={(view, name) => this.setView(view, name)}
          goBack={() => this.goBack()}
          donation={donation}
        />

        <Viewing
          id="viewing"
          donation={donation}
          goBack={() => this.goBack()}
        />
      </Root>
    );
  }
}