declare module '*.less';

type Result = {
  status: number,
  message: string
}

type NotifyType = 'success' | 'info' | 'warning' | 'error';