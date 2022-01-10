import React, { useState, ChangeEventHandler } from 'react'
import { PlayerList } from './components/player-list'
import styles from './App.module.scss'
import './App.css'

function App() {
  const [nameSearch, setNameSearch] = useState('')
  const [nameCaseSensitive, setNameCaseSensitive] = useState(false)
  const [nameExact, setNameExact] = useState(false)
  const [messageSearch, setMessageSearch] = useState('')
  const [messageCaseSensitive, setMessageCaseSensitive] = useState(false)
  const [messageExact, setMessageExact] = useState(false)

  const onNameSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNameSearch(event.target.value)
  }

  const onNameCaseSensitiveChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNameCaseSensitive(event.target.checked)
  }

  const onNameExactChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNameExact(event.target.checked)
  }

  const onMessageCaseSensitiveChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessageCaseSensitive(event.target.checked)
  }

  const onMessageExactChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessageExact(event.target.checked)
  }

  const onMessageSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessageSearch(event.target.value)
  }

  return (
    <div>
      <h1 className={styles.heading}>Sc2 Player Message Database</h1>
      <div className={styles.linkWrapper}>
        <a
          href={'https://twitter.com/feardragon64/status/1480253437875003392?cxt=HHwWgIC54Zaq9YopAAAA'}
          className={styles.link}
        >
          This is @feardragon64's fault
        </a>
      </div>
      <div className={styles.grid}>
        <div></div>
        <div><strong>Case-sensitive</strong></div>
        <div><strong>Exact</strong></div>
        <input type="text" name={'nameSearch'} value={nameSearch} onChange={onNameSearchChange} placeholder={'Player name'} />
        <div><input type="checkbox" checked={nameCaseSensitive} onChange={onNameCaseSensitiveChange} /></div>
        <div><input type="checkbox" checked={nameExact} onChange={onNameExactChange}/></div>
        <input type="text" name={'messageSearch'} value={messageSearch} onChange={onMessageSearchChange} placeholder={'Message'} />
        <div><input type="checkbox" checked={messageCaseSensitive} onChange={onMessageCaseSensitiveChange} /></div>
        <div><input type="checkbox" checked={messageExact} onChange={onMessageExactChange} /></div>
      </div>
      <PlayerList
        nameSearch={nameSearch}
        nameCaseSensitive={nameCaseSensitive}
        nameExact={nameExact}
        messageSearch={messageSearch}
        messageCaseSensitive={messageCaseSensitive}
        messageExact={messageExact}
      />
    </div>
  )
}

export default App
