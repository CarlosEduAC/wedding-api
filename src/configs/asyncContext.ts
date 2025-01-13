import { AsyncLocalStorage } from 'async_hooks'

type ContextStore = Map<string, unknown>
type WithContextData = {
  reqId: string
  logger: unknown
}
type WithContextCallback = () => Promise<void> | void

const context: AsyncLocalStorage<ContextStore> =
  new AsyncLocalStorage<ContextStore>()

export default context

export const withContext = async (
  data: WithContextData,
  callback: WithContextCallback,
): Promise<void> => {
  const { reqId, logger } = data
  const store = new Map()
  store.set('reqId', reqId)
  store.set('logger', logger)

  return context.run(store, callback)
}
