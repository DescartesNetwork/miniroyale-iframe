import { Row, Col, Typography, Button } from 'antd'
import { AppDispatch, AppState } from 'app/model'
import { increaseCounter } from 'app/model/main.controller'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useWallet } from 'senhub/providers'

const Page = () => {
  const {
    wallet: { address },
  } = useWallet()
  const dispatch = useDispatch<AppDispatch>()
  const { counter } = useSelector((state: AppState) => state.main)
  const increase = useCallback(() => dispatch(increaseCounter()), [dispatch])

  return (
    <Row gutter={[24, 24]} align="middle">
      <Col span={24}>
        <Typography.Title level={5}>Page</Typography.Title>
        <Typography.Text>Address: {address}</Typography.Text>
      </Col>
      <Col>
        <Typography.Text>Counter: {counter}</Typography.Text>
      </Col>
      <Col>
        <Button onClick={increase}>Increase</Button>
      </Col>
    </Row>
  )
}

export default Page