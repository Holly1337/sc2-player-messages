import React from 'react'
import data from '../data/data.json'
import { PlayerListItem } from './player-list-item'
import styles from './player-list.module.scss'

interface Props {
  nameSearch: string
  nameCaseSensitive: boolean
  nameExact: boolean
  messageSearch: string
  messageCaseSensitive: boolean
  messageExact: boolean
}

export const PlayerList = (props: Props) => {
  const {
    nameSearch,
    nameCaseSensitive,
    nameExact,
    messageSearch,
    messageCaseSensitive,
    messageExact
  } = props

  const listItems = Object.entries(data)
    .sort(([playerNameA], [playerNameB]) => playerNameA.localeCompare(playerNameB))
    .map(([playerName, playerMessages]) => ({ playerName, playerMessages }))
    .filter(({ playerName }) => {
      if (nameExact) {
        return playerName === nameSearch
      }
      if (nameCaseSensitive) {
        return playerName.includes(nameSearch)
      }
      return playerName.toLocaleLowerCase().includes(nameSearch.toLocaleLowerCase())
    })
    .map(({ playerName, playerMessages }) => (
      <PlayerListItem
        playerName={playerName}
        messages={playerMessages}
        messageSearch={messageSearch}
        messageCaseSensitive={messageCaseSensitive}
        messageExact={messageExact}
      />
    ))

  return (
    <div className={styles.wrapper}>
      {listItems}
    </div>
  )
}
