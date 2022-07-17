import { notification } from 'antd';
import { ArgsProps } from 'antd/lib/notification';

export const notify = (type: NotifyType, title: string, description: string) => {
  const notiSetting: ArgsProps = {
    message: title, description: description,
    placement: 'bottomRight',
  };
  notification[type](notiSetting);
};
