import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = (props) => {
    // console.log(props)
    const { chats, activeChat, userName, messages } = props
    const chat = chats && chats[activeChat]

    // console.log(messages)

    const renderReadReceipts = (message, isMyMessage) => {
        // map over the people that have read the message
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div
                key={`read_${index}`}
                className="read-receipt"
                style={{
                    float: isMyMessage ? 'right' : 'left',
                    backgroundImage: `url(${person?.person?.avatar})`
                }}
            />
        ))

    }

    const renderMessages = () => {
        const keys = Object.keys(messages);
        // console.log(keys)
        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessageKey = index === 0 ? null : keys[index - 1]
            const isMyMessage = userName === message.sender.username

            return (
                <div key={`message_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )
        })
      
    }
    renderMessages()

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload()
        // console.log('working')
    }

    if(!chat) {
        return "Loading..."
    }

    // if(chat.last_message.text != )
    // console.log()


    return (
        <div>
            <button onClick={handleLogout} className="logout-button">
                <span>
                    <strong>Logout</strong>
                </span>
            </button>
            <div className="chat-feed">
                <div className="chat-container">
                    <div className="chat-title">{chat.title}</div>
                    <div className="chat-subtitle">
                        Members: {chat.people.map(person => `${person.person.username}\n`)}
                    </div>
                    {renderMessages()}
                    <div style={{ height: '100px' }}/>
                    <div className="message-form-container">
                        <MessageForm {...props} chatId={activeChat}/>
        
                    </div>
                </div>
            </div>
        <div>
        </div>
        </div>
    )
}

export default ChatFeed;