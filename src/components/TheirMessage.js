import React from 'react'

const TheirMessage = ({ lastMessage, message }) => {
    // is the message first message sent by user
    const isFirstMessage = !lastMessage || lastMessage.sender.username != message.sender.username
    return (
        <div className="message-row">
            {isFirstMessage && (
                <div
                    className="message-avatar"
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
            {message?.attachments?.length > 0
                ? (
                    <img 
                        src={message.attachments[0].file}
                        alt="message-attachment" 
                        className="message-image"
                        style={{ marginLeft: isFirstMessage ? '4px' : '48px'}}
                    />
                ) : (
                    <div className="message" style={{ float: 'left', color: 'white', backgroundColor: '#5E6B80', marginLeft: isFirstMessage ? '4px' : '48px' }}>
                        {message.text}
                    </div>
                )
            }
        </div>
    )
}

export default TheirMessage;