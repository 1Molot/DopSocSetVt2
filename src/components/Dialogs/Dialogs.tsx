import React from 'react';
import s from './Dialogs.module.css'
import {useNavigate} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Dialog, messagesPageType} from '../redux/State';


type DialogsPropsType={
    messagesPage: messagesPageType
}

export const Dialogs = (props: DialogsPropsType) => {
    const navigate = useNavigate();
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                  props.messagesPage.dialogsData.map((dialog) =>{
                      return(
                          <DialogItem name={dialog.name} id={dialog.id}/>
                      )
                  })
                }


            </div>

            <div className={s.messages}>
                {
                    props.messagesPage.messagesData.map((message) =>{
                        return(
                            <Message message={message.message} id={message.id}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Dialogs;