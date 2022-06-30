import { useEffect } from 'react'
import { useUI } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'

import configs from 'configs'
import BG from 'static/images/bg.jpeg'

const {
  manifest: { appId },
} = configs

const View = () => {
  const { setBackground } = useUI()

  useEffect(() => {
    setBackground({ light: BG, dark: BG })
  }, [setBackground])

  return (
    <EmbededView
      wallet={window.sentre.wallet}
      appId={appId}
      src={'https://miniroyale.io/'}
      title="Mini Royale: Open economy FPS on #Solana."
    />
  )
}

export default View
