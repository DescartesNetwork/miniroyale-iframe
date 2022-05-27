import { Fragment, useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Avatar, Button, Col, Modal, Row, Typography } from 'antd'
import IonIcon from '@sentre/antd-ionicon'
import EmbededView from 'shared/antd/embededView'

import configs from 'app/configs'
import BG from 'app/static/images/bg.jpeg'
import LOGO from 'app/static/images/logo.png'

const {
  manifest: { appId },
} = configs

const SOURCE = 'https://miniroyale.io/'

const View = () => {
  const [visiable, setVisible] = useState(true)
  const history = useHistory()

  const onConfirm = useCallback(() => {
    return setVisible(false)
  }, [])

  const onBack = useCallback(() => {
    return history.push('/store')
  }, [history])

  return (
    <Fragment>
      <Modal visible={visiable} footer={null} closable={false}>
        <Row gutter={[36, 36]} justify="center">
          <Col>
            <Avatar shape="square" src={LOGO} size={96} />
          </Col>
          <Col span={24}>
            <Row gutter={[12, 12]} justify="center">
              <Col>
                <Typography.Title level={3}>
                  For Technical Demo Only!
                </Typography.Title>
              </Col>
              <Col span={24}>
                <Typography.Paragraph style={{ textAlign: 'center' }}>
                  This product is only for technical demo purposes. If you are
                  intertested in this application, please support the original
                  project,{' '}
                  <a href={SOURCE} target="_blank" rel="noreferrer">
                    Mini Royale: Nations
                  </a>
                  .
                </Typography.Paragraph>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Typography.Text className="caption" type="secondary">
                  <IonIcon name="alert-circle-outline" /> By clicking the OK
                  button, you understand and agree with the terms. If there are
                  any copyright/IP issues, please contact us at{' '}
                  <a
                    href="mailto:hi@sentre.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    hi@sentre.io
                  </a>
                  .
                </Typography.Text>
              </Col>
              <Col span={24}>
                <Row gutter={[8, 8]}>
                  <Col span={24}>
                    <Button type="primary" onClick={onConfirm} block>
                      OK
                    </Button>
                  </Col>
                  <Col span={24}>
                    <Button type="text" onClick={onBack} block>
                      Back
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
      <EmbededView
        appId={appId}
        src={visiable ? '' : SOURCE}
        title="Mini Royale: Open economy FPS on #Solana."
        background={{ light: BG, dark: BG }}
      />
    </Fragment>
  )
}

export default View
