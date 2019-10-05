import React from 'react';
import Styles from './index.module.css';
import ChatInput from '../elements/ChatInput';
import Message from '../elements/Messages';
const ChatArea = () => {
    return (
        <div className={Styles.ChatArea}>
            <div className={Styles.mainChat}>
                <div className={Styles.conversation}>
                    <Message from="Dami" time="2:00pm">
                        Hello
                    </Message>
                    <Message from="Dami" time="2:01pm">
                        I need help learning the rust programming language. I have homework i need to get completed and i thought you could help walk me to it
                    </Message>
                    <Message recieved from="Tutor Dan" time="2:02pm">
                        Awesome. Thanks for reaching out to me.
                            Let’s jump into Rust by working through a hands-on project together! you’ll practice the fundamentals.

                            We’ll implement a classic beginner programming problem: a guessing game. Here’s how it works: the program will generate a random integer between 1 and 100. It will then prompt the player to enter a guess. After a guess is entered, the program will indicate whether the guess is too low or too high. If the guess is correct, the game will print a congratulatory message and exit.
                    </Message>
                    <Message recieved from="Tutor Dan" time="2:03pm">
                            Let’s get to it.
                    </Message>
                    <Message time="2:04pm">
                        Thanks a lot. What about the differential equation?
                    </Message>
                    <Message recieved from="Tutor Dan" time="2:05pm">
                        Oh lol i love caluclus. We'll get to that later!
                    </Message>
                    
                </div>
            </div>
            <div className={Styles.chatInput}>
                <ChatInput />
            </div>
        </div>
    )
}
export default ChatArea;