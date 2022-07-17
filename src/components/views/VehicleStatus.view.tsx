import React, { useEffect, useState } from 'react';
import { Row, Col, Spin, Skeleton } from 'antd';

import { Round } from '@misc/Round';
import VehicleService from '@services/Vehicle.service';

import '@styles/views/vehicleStatus.view.less';
import { AltitudeIcon, BatteryIcon, CoordIcon } from '@misc/CustomIcon';

type VehicleDict = {
  [vehicleId: string]: Vehicle
}
interface VehicleStatusViewProps {}

export default function VehicleStatusView(props: VehicleStatusViewProps) {
  const [isLoading, changeIsLoading] = useState<boolean>(true);
  const [vcBriefList, changeVcBriefList] = useState<VehicleBrief[]>([]);
  const [vcDict, changeVcDict] = useState<VehicleDict>({});

  useEffect(() => {
    VehicleService.getAll().then((data: VehicleBrief[]) => {
      changeIsLoading(false);
      changeVcBriefList(data);
    });
  }, []);
  useEffect(() => {
    vcBriefList.forEach((vcBrief: VehicleBrief) => {
      VehicleService.getById(vcBrief[0]).then((vc: Vehicle | undefined) => {
        if (vc) changeVcDict((last) => ({ ...last, [vcBrief[0]]: vc }));
      });
    })
  }, [vcBriefList]);

  return (
    <Row gutter={20}>
      {(isLoading)
      ? <div className='loading-view'>
        <Spin tip='Loading...' />
      </div>
      : <>{vcBriefList.map((vc: VehicleBrief) => (
      <Col span={8} key={vc[0]}>
        <div className='vc-card'>
          <div className='vc-card-header text-medium-m'>
            <Round size={40} color='#D0BCFF' />
            <span className='title'>
              {vcDict[vc[0]] ? vcDict[vc[0]].name : <Skeleton.Input active size='small' />}
            </span>
          </div>
          <div className='vc-card-content text-regular-s'>
            <Row className='row'>
              <Col className='text-center' flex='40px'><CoordIcon /></Col>
              <Col flex='auto'>Coordinates</Col>
              <Col className='text-right text-light-s' flex='auto'>
                {vcDict[vc[0]]
                ? `${vcDict[vc[0]].inertialStates.location[0]},${vcDict[vc[0]].inertialStates.location[1]}`
                : <Skeleton.Input active size='small' />}
              </Col>
            </Row>
            <Row className='row'>
              <Col className='text-center' flex='40px'><AltitudeIcon /></Col>
              <Col flex='auto'>Altitude</Col>
              <Col className='text-right text-light-s' flex='auto'>
                {vcDict[vc[0]]
                ? `${vcDict[vc[0]].inertialStates.location[2]} m`
                : <Skeleton.Input active size='small' />}
              </Col>
            </Row>
            <Row className='row'>
              <Col className='text-center' flex='40px'><BatteryIcon /></Col>
              <Col flex='auto'>Battery</Col>
              <Col className='text-right text-light-s' flex='auto'>
                {vcDict[vc[0]]
                ? `${vcDict[vc[0]].operatingStates.remainingEnergy} %`
                : <Skeleton.Input active size='small' />}
              </Col>
            </Row>
          </div>
        </div>
      </Col>
      ))}
      </>}
    </Row>
  );
}