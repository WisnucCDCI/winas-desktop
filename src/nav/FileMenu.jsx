import React from 'react'
import { Divider } from 'material-ui'
import { MenuButton } from '../common/Buttons'

class NavDrawer extends React.Component {
  constructor (props) {
    super(props)

    this.state = { nav: this.props.nav }

    this.navTo = (nav) => {
      this.setState({ nav }, () => this.props.navTo(nav))
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.nav !== nextProps.nav) this.setState({ nav: nextProps.nav })
  }

  renderUSB () {
    const { views } = this.props
    const { nav } = this.state
    return (
      <div>
        <div style={{ height: 10 }} />
        <Divider style={{ marginLeft: 15, width: 180 }} className="divider" />

        {
          ['usb'].map(v => (
            <MenuButton
              key={v}
              icon={nav === v ? views[v].menuSelectedIcon() : views[v].menuIcon()}
              text={views[v].menuName()}
              selected={nav === v}
              onClick={() => this.navTo(v)}
            />
          ))
        }
      </div>
    )
  }

  render () {
    const { views, primaryColor, pin } = this.props
    const { nav } = this.state

    return (
      <div style={{ width: '100%', height: '100%' }} >
        {
          ['home', 'public', 'backup'].map(v => (
            <MenuButton
              primaryColor={primaryColor}
              key={v}
              icon={nav === v ? views[v].menuSelectedIcon() : views[v].menuIcon()}
              text={views[v].menuName()}
              selected={nav === v}
              onClick={() => this.navTo(v)}
            />
          ))
        }
        <div style={{ height: 8 }} />
        <div style={{ margin: '0px 15px 0px 15px', width: !pin ? 58 : 180, height: 1, backgroundColor: '#f2f2f2' }} />
        <div style={{ height: 8 }} />
        {
          ['transfer'].map(v => (
            <MenuButton
              primaryColor={primaryColor}
              key={v}
              icon={views[v].menuIcon()}
              text={views[v].menuName()}
              selected={nav === v}
              onClick={() => this.navTo(v)}
            />
          ))
        }
        <div style={{ height: 8 }} />
        <div style={{ margin: '0px 15px 0px 15px', width: !pin ? 58 : 180, height: 1, backgroundColor: '#f2f2f2' }} />
      </div>
    )
  }
}

export default NavDrawer
