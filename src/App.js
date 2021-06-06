import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [meetings, setMeetings] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>You have {meetings.length} meetings today</h3>
        <List meetings={meetings} />
        <button onClick={() => setMeetings([])}>clear all</button>
      </section>
    </main>
  )
}

export default App
