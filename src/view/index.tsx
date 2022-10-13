import EmbededView from '@sentre/embeded-view'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  return (
    <EmbededView
      wallet={window.sentre.solana}
      appId={appId}
      src={'https://miniroyale.io/'}
      title="Mini Royale: Open economy FPS on #Solana."
    />
  )
}

export default View
