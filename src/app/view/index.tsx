import EmbededView from 'shared/antd/embededView'

import configs from 'app/configs'
import BG from 'app/static/images/bg.jpeg'

const {
  manifest: { appId },
} = configs

const View = () => {
  return (
    <EmbededView
      appId={appId}
      src={'https://miniroyale.io/'}
      title="Mini Royale: Open economy FPS on #Solana."
      background={{ light: BG, dark: BG }}
    />
  )
}

export default View
