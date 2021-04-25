import React from 'react'

const MyMessage = ({ message }) => {

    // if message is an image, render it in an img tag
    if(message?.attachments?.length > 0) {
        return (
            <img 
                src={message.attachments[0].file}
                alt="message-attachment" 
                className="message-image"
                style={{ float: 'right' }}
            />
        )
    }
    
    
    // else, if simple text message, render in div tag as a text message
    return (
        // our message which appears on right side
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '3B2A50' }}>
            {message.text}
        </div>
    )
}

export default MyMessage;