import Pino, { Logger } from 'pino'
import ecsFormat from '@elastic/ecs-pino-format'
import { context } from '@/configs'

type Target = {
  [key: string]: (obj: unknown, msg?: string | undefined) => Promise<void>
}

const logLevelDefault: string =
  process.env.NODE_ENV === 'production' ? 'info' : 'debug'

const sysLogSeverityLevel: {
  [key: string]: string
} = {
  fatal: '2',
  error: '3',
  warn: '4',
  info: '6',
  debug: '7',
  trace: '8',
}

const logger: Logger = Pino(
  {
    ...ecsFormat({ apmIntegration: false }),
    base: {
      app_version: process.env.APP_VERSION,
      BU: process.env.BU || 'cross',
      tribe: process.env.TRIBE || 'financial',
      tags: process.env.TAGS,
      log_type: 'api',
    },
    messageKey: 'message',
    level: process.env.LOG_LEVEL || logLevelDefault,
    formatters: {
      level(label: string) {
        return {
          level: sysLogSeverityLevel[label] || sysLogSeverityLevel.info,
        }
      },
    },
  },
  Pino.destination({ sync: false }),
)

function setProxyError(target: Target, property: string) {
  if (['error', 'fatal'].includes(property)) {
    const originalMethod = target[property]
    target[property] = async function (
      obj: unknown,
      msg?: string,
    ): Promise<void> {
      originalMethod?.apply(target, [obj, msg])
    }
  }
}

export default new Proxy(logger, {
  get(target, property: string, receiver) {
    const targetProxy = context.getStore()?.get('logger') || target
    setProxyError(targetProxy as Target, property)
    return Reflect.get(targetProxy, property, receiver)
  },
})
