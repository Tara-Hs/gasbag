import React from 'react'
import { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine'
import { SendOutlined, PictureFilled, ShopOutlined} from '@ant-design/icons'
import typingSound from './soundEffects/sound.wav'
import sendMsg from './soundEffects/sendMsg.wav'
import { Howl, Howler} from 'howler'



const MessageForm = (props) => {

    const [ value, setValue ] = useState('')

    // destructing chatId and creds from props
    const { chatId, creds } = props


    const SoundPlay = (src) => {

        const sound = new Howl({
            src
        })
        
        sound.play()
        Howler.volume(0.5)
        // console.log('working...')
    }

    
    const handleSubmit = (event) => {
        event.preventDefault()

        const text = value.trim()
        if(text.length > 0) {
            // if value's length > 0, send it as a message
            sendMessage(creds, chatId, { text })
            SoundPlay(sendMsg)
            // reset the value back to empty string after message was sent
            setValue("")
        }
        
    }

    const handleChange = (event) => {
        setValue(event.target.value)
        // isTyping(props, chatId)
        SoundPlay(typingSound)
        
    }

    // to upload files/img need to event.target the files
    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: "" })
    }
     


    return (
        <form className="message-form" onSubmit={handleSubmit}>
            
            <input className="message-input" placeholder="Type your message" value={value} onChange={handleChange} onSubmit={handleSubmit}/>
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureFilled className="picture-icon"/>
                </span>
            </label>
            <input type="file" multiple={false} id="upload-button" style={{ display: 'none' }} onChange={handleUpload}/>
            <button className="send-button" type="submit">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    )
}

export default MessageForm;