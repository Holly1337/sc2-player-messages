import React from 'react'
import styles from './player-list-item.module.scss'

interface PlayerMessages {
  [id: string]: {
    count: number
    timestamps: number[]
  }
}

interface Props {
  playerName: string
  messages: PlayerMessages
  messageSearch: string
  messageCaseSensitive: boolean
  messageExact: boolean
}

export const PlayerListItem = ({ playerName, messages, messageSearch, messageExact, messageCaseSensitive }: Props) => {
  const messageArray = Object
    .entries(messages)
    .sort(([messageA], [messageB]) => messageA.localeCompare(messageB))
    .map(([message, data]) => ({ message, ...data }))
    .filter(({ message }) => {
      if (messageExact) {
        return message === messageSearch
      }
      if (messageCaseSensitive) {
        return message.includes(messageSearch)
      }
      return message.toLocaleLowerCase().includes(messageSearch.toLocaleLowerCase())
    })

  if (messageArray.length === 0) {
    return null
  }

  return (
    <div className={styles.listItem}>
      <h2 className={styles.playerName}>{playerName}</h2>
      <div className={styles.gridItem}>
        {messageArray.map(({ message, count }) => (
          <>
            <h3 className={styles.message}>{message}</h3>
            <h3 className={styles.count}>{count}</h3>
          </>
        ))}
      </div>
    </div>
  )
}
