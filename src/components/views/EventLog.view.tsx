import React, { useEffect, useState } from 'react';
import { Table, Spin } from 'antd';

import EventLogService from '@services/EventLog.service';
import { Round } from '@misc/Round';
import { getColorFromLevel, timeFormatBrief } from 'common/common';
import { AlertLevelMap } from 'common/const';

import '@styles/views/eventLog.view.less';

const LogTableColumns = [
  {
    title: <span className='text-medium-m'>Level</span>, dataIndex: 'level', key: 'level',
    render: (level: number) => (<span className='text-light-s'>
      <Round size={24} color={getColorFromLevel(level)} /> {AlertLevelMap[level]}
    </span>)
  },
  {
    title: <span className='text-medium-m'>Date</span>, dataIndex: 'date', key: 'date',
    render: (date: string) => (<span className='text-light-s'>{timeFormatBrief(date)}</span>)
  },
  {
    title: <span className='text-medium-m'>Resolved?</span>, dataIndex: 'isResolve', key: 'isResolve',
    render: (isResolve: boolean) => (<span className='text-light-s'>{isResolve ? 'Y' : 'N'}</span>)
  },
  {
    title: <span className='text-medium-m'>Resolve Date</span>, dataIndex: 'resolveDate', key: 'resolveDate',
    render: (resolveDate: string) => (<span className='text-light-s'>
      {resolveDate.length > 0 ? timeFormatBrief(resolveDate) : '--'}
    </span>)
  },
  {
    title: <span className='text-medium-m'>Message</span>, dataIndex: 'msg', key: 'msg',
    render: (msg: string) => (<span className='text-light-s'>{msg}</span>)
  }
];

interface EventLogViewProps {}

export default function EventLogView(props: EventLogViewProps) {
  const [isLoading, changeIsLoading] = useState<boolean>(true);
  const [logList, changeLogList] = useState<EventLog[]>([]);

  useEffect(() => {
    EventLogService.getAll().then((data: EventLog[]) => {
      changeIsLoading(false);
      changeLogList(data);
      console.log(data)
    });
  }, []);

  return (<>
    {(isLoading)
    ? <div className='loading-view'>
      <Spin tip='Loading...' />
    </div>
    : <Table className='event-log-table' pagination={false}
      columns={LogTableColumns} dataSource={logList.map((rec, index) => ({ ...rec, key: `rec-${index}` }))} />
    }
  </>);
}